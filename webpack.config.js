const path = require("path");
module.exports = {
    watch: true,
    module: {
        rules: [
            {
                test: /\.tsx/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 25000
                    }
                }
            },
            {test: /\.css$/, use: ["style-loader", "css-loader"]},
        ]
    }
}