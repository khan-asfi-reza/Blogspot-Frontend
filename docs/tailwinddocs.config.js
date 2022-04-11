const tailwindconfig = require("../tailwind.config");

module.exports = {
    ...tailwindconfig,
    safelist: [
        {
            pattern: /./
        }
    ]
}