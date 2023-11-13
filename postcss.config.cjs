const nested = require("postcss-nested");
const presetEnv = require("postcss-preset-env");
const customMedia = require("postcss-custom-media");

module.exports = {
    plugins: [
        nested(),
        presetEnv(),
        customMedia({}),
    ]
}