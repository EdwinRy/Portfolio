
export const ParticlePointVS = /*glsl*/`

precision highp float;
uniform sampler2D uPositions;
uniform float uTime;

void main() {
    vec3 pos = texture2D(uPositions, position.xy).xyz;

    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
    gl_PointSize = 4.0;
}
`;

export const ParticlePointFS = /*glsl*/`

precision highp float;
void main() {
    vec3 color = vec3(1., 1., 1.);
    gl_FragColor = vec4(color, 1.0);
}
`;
