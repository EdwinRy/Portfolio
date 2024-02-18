"use client";
import { OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { ParticlePositionFBO } from "./ParticlePositionFBO";
import { Bloom, ChromaticAberration, EffectComposer, Pixelation } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing"

const vs = `
uniform sampler2D uPositions;
uniform float uTime;

void main() {
    vec3 pos = texture2D(uPositions, position.xy).xyz;

    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
    gl_PointSize = 7.0;
}`

const fs = `

void main() {
    vec3 color = vec3(1., 1., 1.);
    gl_FragColor = vec4(color, 1.0);
  }
`

const Particles = ({ count = 10 }) => {
    const points = useRef<THREE.Points>(null)

    const particlesPosition = useMemo(() => {
        const particles = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const stride = i * 3;
            particles[stride + 0] = (i % count) / count;
            particles[stride + 1] = i / count / count;
        }
        return particles;
    }, [count]);

    const uniforms = useMemo(() => ({
        uPositions: {
            value: null,
        },
    }), [])

    return (
        <>
            <ParticlePositionFBO pointsRef={points} count={count} />
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
                    fragmentShader={fs}
                    vertexShader={vs}
                    uniforms={uniforms}
                />
            </points>
        </>
    )
}

export const ParticleField = ({ count = 10 }) =>
    <div className="w-full h-full absolute z-10">
        <Canvas resize={{ scroll: false }} >
            <OrthographicCamera
                makeDefault
                manual
                left={-0.49}
                right={0.49}
                top={0.49}
                bottom={-0.49}
                near={1 / Math.pow(2, 53)}
                far={0.5}
                onUpdate={(c) => c.updateProjectionMatrix()}
            >
                <Particles count={count} />
            </OrthographicCamera>
            <EffectComposer>
                <Bloom
                    intensity={0.01}
                    luminanceThreshold={0}
                    // luminanceSmoothing={0.05}
                    // mipmapBlur={false}
                />
                <ChromaticAberration
                    blendFunction={BlendFunction.NORMAL}
                    offset={[0.002, 0.001]}
                    radialModulation />
            </EffectComposer>
        </Canvas>
    </div>
