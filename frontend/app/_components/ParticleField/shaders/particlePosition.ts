import { snoise2d } from "@/app/_utils/shaders/snoise2d"

export const ParticlePositionVS = /*glsl*/`

uniform float uTime;
varying vec2 vUv;

void main() {
    vUv = uv;
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
}
`;

export const ParticlePositionFS = /*glsl*/`

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
    
    float positionTime = uTime/20.;

    pos.x = mod((pos.x + offset + positionTime), 2.) - 1.;
    pos.y = mod((pos.y + offset - positionTime), 2.) - 1.;
    gl_FragColor = vec4(pos, 1.0);
}
`;
