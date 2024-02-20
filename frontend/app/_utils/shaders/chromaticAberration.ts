export const ChromaticAberration = /*glsl*/`

vec4 chromaticAberration(
    sampler2D tex,
    vec2 uv,
    float redOffset,
    float greenOffset,
    float blueOffset,
    float distanceFactor
) {

    float redOff = redOffset * distanceFactor;
    float greenOff = greenOffset * distanceFactor;
    float blueOff = blueOffset * distanceFactor;

    vec4 red = texture2D(tex, uv + redOff);
    vec4 green = texture2D(tex, uv + greenOff);
    vec4 blue = texture2D(tex, uv + blueOff);

    float alpha = (red.a + green.a + blue.a);

    return vec4(red.r, green.g, blue.b, alpha);
}

`;
