module.exports = {
    entry: ["babel-polyfill", "./src/client/index.js"],
    output: {
        filename: "./public/client.bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]--[hash:base64:5]'
                        }
                    }
                ]
            }
        ]
    },
    // devtool: 'inline-source-map',
    target: 'web'
}
