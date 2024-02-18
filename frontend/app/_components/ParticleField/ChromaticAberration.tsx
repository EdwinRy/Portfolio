import { useRef } from "react"
import * as THREE from "three";

const vs = `
void main() {
    gl_Position = vec4( position, 1.0 );
}
`
const fs = `
void main() {
    gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
}
`

export const ChromaticAberration = () => {

    const shaderRef = useRef<THREE.ShaderMaterial>(null)

    return (
        <shaderMaterial ref={shaderRef} uniforms={{

        }}
            vertexShader={vs}
            fragmentShader={fs}
        />
    )
}

