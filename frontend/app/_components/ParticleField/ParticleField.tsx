import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useViewportResizeUpdate } from "@/app/_utils/useViewportResizeUpdate";
import { useFBO } from "@react-three/drei";
import { createPortal, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { ParticlePositionFS, ParticlePositionVS } from "./shaders/particlePosition";
import { ParticlePointFS, ParticlePointVS } from "./shaders/particlePoint";
import { ParticlePostProcessingFS, ParticlePostProcessingVS } from "./shaders/postProcessing";

export const ParticleField = ({ count = 200 }) =>
    <div className="w-full h-full absolute z-10">
        <Canvas resize={{ scroll: false }} dpr={[1, 2]}>
            <OrthographicCamera
                makeDefault
                manual
                left={-1}
                right={1}
                top={1}
                bottom={-1}
                near={1 / Math.pow(2, 53)}
                far={10000.5}
                onUpdate={(c) => c.updateProjectionMatrix()}
            >
                {/* <Particles count={count} /> */}
                <PostProcessedParticles count={count} />
            </OrthographicCamera>
            <OrbitControls />
        </Canvas>
    </div>;

const PostProcessedParticles = ({ count = 10 }) => {

    const particleFBO = useFBO()
    const particleScene = useMemo(() => new THREE.Scene(), [])

    const particlePortal = useMemo(() => {
        return createPortal(
            <Particles count={count} />, particleScene)
    }, [count])

    const particleCamera = useMemo(() => {
        const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        cam.position.z = 1;
        return cam;
    }, [count])

    useFrame((state) => {
        if (!particleFBO) return;
        if (!particleScene) return;
        const gl = state.gl;
        gl.setRenderTarget(particleFBO)
        gl.clear()
        gl.render(particleScene, particleCamera);
        gl.setRenderTarget(null);
    });

    const uniforms = useMemo(() => ({
        uScene : { value: particleFBO.texture },
    }), [])

    return (
        <>
            {particlePortal}
            <mesh position={[0, 0, 0]}>
                <planeGeometry args={[2, 2]} />
                <shaderMaterial
                    blending={THREE.AdditiveBlending}
                    depthWrite={true}
                    vertexShader={ParticlePostProcessingVS}
                    fragmentShader={ParticlePostProcessingFS}
                    uniforms={uniforms} />
            </mesh>
        </>
    );
}

const displayQuad = new Float32Array([
    -1, -1, 0,
    1, -1, 0,
    1, 1, 0,
    -1, -1, 0,
    1, 1, 0,
    -1, 1, 0])
const displayQuadUVs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]);

const getInitialPositions = (count: number) => {
    const texture = new Float32Array(count * 4)

    for (let i = 0; i < count; i++) {
        const stride = i * 4
        texture[stride] = Math.random() * 2 - 1
        texture[stride + 1] = Math.random() * 2 - 1
        texture[stride + 2] = 0
    }
    return texture
}

const Particles = (
    { count = 10 }:
    {count: number, target?: THREE.WebGLRenderTarget<THREE.Texture>, particleScene?: THREE.Scene}
) => {
    const update = useViewportResizeUpdate();
    const points = useRef<THREE.Points>(null)
    const positionsShaderMaterialRef = useRef<THREE.ShaderMaterial>(null)

    const particlesPosition = useMemo(() => {
        const particles = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const stride = i * 3;
            particles[stride] = (i % count) / count;
        }
        return particles;
    }, [count, update]);

    const positionCamera = useMemo(() =>
        new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    , [update]);

    const positionScene = useMemo(() => new THREE.Scene(), [update])

    const positionFbo = useFBO(count, 1, {
        format: THREE.RGBAFormat,
        type: THREE.FloatType,
        stencilBuffer: false,
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
    });

    const positionsTexture = useMemo(() => {
        const tex = new THREE.DataTexture(
            getInitialPositions(count),
            count,
            1,
            THREE.RGBAFormat,
            THREE.FloatType,
        );
        tex.needsUpdate = true;
        return tex;
    }, [count, update])

    useFrame((state) => {
        if (!points.current) return;
        if (!points.current.material) return;
        if (!positionsShaderMaterialRef.current) return;
        if (!positionsShaderMaterialRef.current.uniforms.positions) return;

        const gl = state.gl;
        const uTime = state.clock.elapsedTime;
        gl.setRenderTarget(positionFbo)
        gl.clear()
        gl.render(positionScene, positionCamera);
        gl.setRenderTarget(null);

        points.current.material.uniforms.uPositions.value = positionFbo.texture
        positionsShaderMaterialRef.current.uniforms.uTime.value = uTime;
    });

    const positions =
            <mesh>
                <shaderMaterial ref={positionsShaderMaterialRef} uniforms={{
                    positions: { value: positionsTexture },
                    uTime: { value: 0 },
                }}
                    vertexShader={ParticlePositionVS}
                    fragmentShader={ParticlePositionFS}
                >
                </shaderMaterial>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={displayQuad.length / 3}
                        array={displayQuad}
                        itemSize={3}
                    />
                    <bufferAttribute
                        attach="attributes-uv"
                        count={displayQuadUVs.length / 2}
                        array={displayQuadUVs}
                        itemSize={2}
                    />
                </bufferGeometry>
            </mesh>

    const positionPortal = useMemo(() => {
        return createPortal(positions, positionScene)
    }, [count, update, positions])

    return (
        <>
            {positionPortal}
            <points ref={points}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={count}
                        array={particlesPosition}
                        itemSize={3}
                    />
                </bufferGeometry>
                <shaderMaterial
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                    vertexShader={ParticlePointVS}
                    fragmentShader={ParticlePointFS}
                    uniforms={
                        {
                            uPositions: { value: null },
                            uTime: { value: 0 },
                        }
                    }
                />
            </points>
        </>
    )
}
