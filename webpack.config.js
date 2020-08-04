const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./systems/game/index.js",
    output: {
        path: path.join(__dirname, "public/js"),
        filename: "bundle.js"
    },
    mode: "none",
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            include: path.join(__dirname, "systems"),
            use: ["style-loader", "css-loader", "sass-loader"]
        }, {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }, {
            test: /\.(eot|woff2?|ttf)$/i,
            loader: "file-loader"
        }]
    },
    performance: {
        hints: "warning"
    }
};
