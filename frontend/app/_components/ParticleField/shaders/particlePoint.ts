
export const ParticlePointVS = /*glsl*/`

precision highp float;
uniform sampler2D uPositions;
uniform float uTime;

void main() {
    vec3 pos = texture2D(uPositions, position.xy).xyz;

    vec4 modelPosition = modelMatrix * vec4(pos.xy, 0.0, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
    gl_PointSize = 5.0 + pos.z;
}
`;

export const ParticlePointFS = /*glsl*/`

precision highp float;
float PI = 3.1415926;
uniform vec3 uColour;
uniform float uTime;

float EaseInOutSine(float x) {
    return -(cos(PI * x) - 1.0) / 2.0;
}

void main() {
    vec4 color = vec4(uColour, 1.0);
    color.a *= EaseInOutSine(min(uTime * 0.5, 1.));
    gl_FragColor = color;
}
`;
