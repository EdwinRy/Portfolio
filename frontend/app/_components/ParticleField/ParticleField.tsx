import { OrthographicCamera } from "@react-three/drei";
import { Canvas, Vector3 } from "@react-three/fiber";
import { useFBO } from "@react-three/drei";
import { createPortal, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { ParticlePositionFS, ParticlePositionVS } from "./shaders/particlePosition";
import { ParticlePointFS, ParticlePointVS } from "./shaders/particlePoint";
import { ParticlePostProcessingFS, ParticlePostProcessingVS } from "./shaders/postProcessing";

interface ParticleFieldParams {
    count: number;
    aberrationDistanceFactor?: number;
    aberrationRGBOffset?: Vector3;
    cameraZoom?: number;
    particleColour?: string;
    postProcessing?: boolean;
}

export const ParticleField = ({
    count = 200,
    aberrationDistanceFactor = 0.3,
    aberrationRGBOffset = [0.01, 0, -0.01],
    cameraZoom = 1.3,
    particleColour = "white",
    postProcessing = true,
}: ParticleFieldParams) =>
    <div className="w-full h-full absolute z-10">
        <Canvas resize={{ scroll: false }} dpr={[1.25, 2]}>
            <OrthographicCamera
                makeDefault
                manual
                left={-1}
                right={1}
                top={1}
                bottom={-1}
                near={1 / Math.pow(2, 53)}
                far={100}
                zoom={cameraZoom}
                onUpdate={(c) => c.updateProjectionMatrix()}
            >
                {postProcessing &&
                    <PostProcessedParticles count={count}
                        aberrationDistanceFactor={aberrationDistanceFactor}
                        aberrationRGBOffset={aberrationRGBOffset}
                        particleColour={particleColour} />}
                {!postProcessing &&
                    <Particles count={count}
                        particleColour={particleColour} />}
            </OrthographicCamera>
        </Canvas>
    </div>


interface PostProcessingProps {
    count: number;
    aberrationDistanceFactor: number;
    aberrationRGBOffset: Vector3;
    particleColour: string;
}

const PostProcessedParticles = ({
    count,
    aberrationDistanceFactor,
    aberrationRGBOffset,
    particleColour,
}: PostProcessingProps) => {
    // Prepare particle scene
    const particleFBO = useFBO();
    const particleScene = useMemo(() => new THREE.Scene(), [count]);
    const particleCamera = useMemo(() => new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1), [count]);

    const particlePortal = useMemo(() => {
        return createPortal(
            <Particles count={count} particleColour={particleColour} />, particleScene)
    }, [count]);

    const uniforms = useMemo(() => ({
        uScene : { value: particleFBO.texture },
        uTime: { value: 0 },
        uAberrationDistanceFactor: { value: aberrationDistanceFactor },
        uAberrationRGBOffset: { value: aberrationRGBOffset },
    }), [aberrationDistanceFactor, aberrationRGBOffset, count]);

    // Render particles to an off-screen framebuffer
    useFrame((state) => {
        if (!particleFBO) return;
        if (!particleScene) return;
        const gl = state.gl;
        gl.setRenderTarget(particleFBO)
        gl.clear()
        gl.render(particleScene, particleCamera);
        gl.setRenderTarget(null);

        const uTime = state.clock.elapsedTime;
        uniforms.uTime.value = uTime;
    });

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


const particlePositionsQuad = new Float32Array([
    -1, -1, 0,
    1, -1, 0,
    1, 1, 0,
    -1, -1, 0,
    1, 1, 0,
    -1, 1, 0])
const particlePositionsQuadUVs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]);

const getInitialPositions = (count: number) => {
    const texture = new Float32Array(count * 4)
    for (let i = 0; i < count; i++) {
        const stride = i * 4
        // X and Y coordinates
        texture[stride] = Math.random() * 2 - 1
        texture[stride + 1] = Math.random() * 2 - 1

        // Use this for particle size
        texture[stride + 2] = Math.random() * 3
    }
    return texture
}

interface ParticleProps {
    count: number;
    particleColour: string;
}

const Particles = ({
    count,
    particleColour,
}: ParticleProps ) => {
    // We need to keep a reference to object holding point positions and
    // position simulation texture
    const points = useRef<THREE.Points>(null)
    const positionsShaderMaterialRef = useRef<THREE.ShaderMaterial>(null)

    // Generate list of positions with the x-coordinate corresponding to position
    // of the particle in the position texture (it is 0 to 1 normalised)
    const particlesPosition = useMemo(() => {
        const particles = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const stride = i * 3;
            particles[stride] = (i % count) / count;
        }
        return particles;
    }, [count]);

    // Create a scene with a camera for particle positions
    const positionCamera = useMemo(() => new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1), [count]);
    const positionScene = useMemo(() => new THREE.Scene(), [count])

    // Initial positional data for each particle in a count x 1 texture
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
    }, [count])

    // Render target for particle positions simulation
    const positionFbo = useFBO(count, 1, {
        format: THREE.RGBAFormat,
        type: THREE.FloatType,
        stencilBuffer: false,
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
    });

    const particleUniforms = useMemo(() => ({
        uPositions: { value: null },
        uTime: { value: 0 },
        uColour: { value: new THREE.Color(particleColour) },
    }), [count]);

    const positionsUniforms = useMemo(() => ({
        positions: { value: positionsTexture },
        uTime: { value: 0 },
    }), [count]);

    useFrame((state) => {
        if (!points.current) return;
        if (!points.current.material) return;

        if (!positionsShaderMaterialRef.current) return;
        if (!positionsShaderMaterialRef.current.uniforms.positions) return;

        const pointsMaterial = points.current.material as THREE.ShaderMaterial;
        if (!pointsMaterial) return;

        const gl = state.gl;
        const uTime = state.clock.elapsedTime;

        // Render particle positions off-screen
        gl.setRenderTarget(positionFbo)
        gl.clear()
        gl.render(positionScene, positionCamera);
        gl.setRenderTarget(null);

        // Feed rendered particle positions into particle positions uniform
        pointsMaterial.uniforms.uPositions.value = positionFbo.texture
        pointsMaterial.uniforms.uTime.value = uTime
        // Update particle simulation time
        positionsShaderMaterialRef.current.uniforms.uTime.value = uTime;
    });

    // Draw a 1 by count quad containing particle positions
    const positions = useMemo(() =>
            <mesh>
                <shaderMaterial ref={positionsShaderMaterialRef} uniforms={positionsUniforms}
                    depthWrite={false}
                    vertexShader={ParticlePositionVS}
                    fragmentShader={ParticlePositionFS}
                >
                </shaderMaterial>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particlePositionsQuad.length / 3}
                        array={particlePositionsQuad}
                        itemSize={3}
                    />
                    <bufferAttribute
                        attach="attributes-uv"
                        count={particlePositionsQuadUVs.length / 2}
                        array={particlePositionsQuadUVs}
                        itemSize={2}
                    />
                </bufferGeometry>
            </mesh>, [count]);

    const positionPortal = useMemo(() => {
        return createPortal(positions, positionScene)
    }, [count])

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
                    uniforms={particleUniforms}
                />
            </points>
        </>
    )
}
