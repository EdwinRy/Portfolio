
export const ParticlePostProcessingVS = /*glsl*/`
precision highp float;
varying vec2 vUv;

void main() {
    vUv = uv - 0.5;

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
}
`;

export const ParticlePostProcessingFS = /*glsl*/`
precision highp float;

uniform sampler2D uScene;
varying vec2 vUv;


// vec4 chromaticAberration(vec2 uv, vec4 fragColor, float xOffset, float yOffset) {
//     return vec4(
//       texture(
//         uScene, 
//         vec2(uv.x + (0.1 * xOffset), uv.y + (0.1 * yOffset))
//       ).x,
//       texture(
//         uScene, 
//         uv
//       ).y,
//       texture(
//         uScene, 
//         uv
//       ).z,
//       1.0
//     );
// }



void main() {
    vec2 uv = vUv;

    vec4 color = texture2D(uScene, uv + 0.5);
    color.r = mod(color.r, 0.5);
    color.a = distance(uv, vec2(.0, .0));
    // vec4 col = texture(uScene, uv);
    // vec4 chrom = chromaticAberration(uv, col, 0.1, -0.1);

    // gl_FragColor = chrom;
    gl_FragColor = color;
  }
`;
