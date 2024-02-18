import { snoise2d } from "@/app/_utils/snoise2d";
import { useViewportResizeUpdate } from "@/app/_utils/useViewportResizeUpdate";
import { useFBO } from "@react-three/drei";
import { createPortal, useFrame } from "@react-three/fiber";
import { RefObject, useMemo, useRef } from "react";
import * as THREE from "three";

const vs = `
varying vec2 vUv;

void main() {
    vUv = uv;

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
}`

const fs = `

uniform sampler2D positions;
uniform float uTime;
uniform float uFrequency;

varying vec2 vUv;

${snoise2d}


void main() {
    vec3 pos = texture2D(positions, vUv).rgb;

    float noiseTime = uTime/8.;
    vec2 posMod = vec2(pos.x, pos.y);
    float offset = snoise(posMod + noiseTime) * .05;
    // float offset = 0.01;
    
    float positionTime = uTime/20.;

    pos.x = mod((pos.x + offset + positionTime), 1.) - .5;
    pos.y = mod((pos.y + offset - positionTime), 1.) - .5;

    gl_FragColor = vec4(pos, 1.0);
}`

const getInitialPositions = (count: number) => {
    const texture = new Float32Array(count * 4)

    for (let i = 0; i < count; i++) {
        const stride = i * 4
        texture[stride] = Math.random()
        texture[stride + 1] = Math.random()
        texture[stride + 2] = 0
        texture[stride + 3] = 1
    }

    return texture
}

const displayQuad = new Float32Array([
    -1, -1, 0,
    1, -1, 0,
    1, 1, 0,
    -1, -1, 0,
    1, 1, 0,
    -1, 1, 0])
const displayQuadUVs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]);

interface ParticlePositionFBOProps {
    count: number;
    pointsRef: RefObject<THREE.Points>;
}

export const ParticlePositionFBO = (
    { count, pointsRef }: ParticlePositionFBOProps
) => {
    const update = useViewportResizeUpdate();

    const particleCamera = useMemo(() =>
        new THREE.OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1)
        , []);

    const positionFbo = useFBO(count, 1, {
        format: THREE.RGBAFormat,
        stencilBuffer: false,
        type: THREE.FloatType,
        depthBuffer: true,
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
    });

    const threeScene = useMemo(() => new THREE.Scene(), [update])

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

    const positionsShaderMaterialRef = useRef<THREE.ShaderMaterial>(null)

    useFrame((state) => {
        if (!pointsRef.current) return;
        if (!pointsRef.current.material) return;
        if (!positionsShaderMaterialRef.current) return;

        const gl = state.gl;
        const uTime = state.clock.elapsedTime;
        gl.setRenderTarget(positionFbo)
        gl.clear()
        gl.render(threeScene, particleCamera);
        gl.setRenderTarget(null);

        (pointsRef.current.material as any).uniforms.uPositions.value = positionFbo.texture
        positionsShaderMaterialRef.current.uniforms.uTime.value = uTime
    })

    const positionTexture =
        <mesh>
            <shaderMaterial ref={positionsShaderMaterialRef} uniforms={{
                positions: { value: positionsTexture },
                uTime: { value: 0 },
            }}
                vertexShader={vs}
                fragmentShader={fs}
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

    return createPortal(positionTexture, threeScene)
}
