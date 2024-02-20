import { ChromaticAberration } from "../../../_utils/shaders/chromaticAberration";

export const ParticlePostProcessingVS = /*glsl*/`
precision highp float;
varying vec2 vUv;

void main() {
    vUv = uv;

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
}
`;

export const ParticlePostProcessingFS = /*glsl*/`
precision highp float;

float PI = 3.1415926;

uniform sampler2D uScene;
uniform float uTime;
uniform float uAberrationDistanceFactor;
uniform vec3 uAberrationRGBOffset;

varying vec2 vUv;

${ChromaticAberration}

void main() {
    vec2 uv = vUv;
    vec4 color = texture2D(uScene, uv);

    float distanceFromCenter = distance(uv, vec2(0.5, 0.5));
    float distanceFactor = distanceFromCenter * uAberrationDistanceFactor;

    vec4 chromatic = chromaticAberration(
        uScene, uv,
        uAberrationRGBOffset.x, uAberrationRGBOffset.y, uAberrationRGBOffset.z,
        distanceFactor);

    gl_FragColor = chromatic;
}
`;
