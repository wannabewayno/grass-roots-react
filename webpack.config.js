// webpack.config.js
const path = require('path');


module.exports = {
    mode:'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
        publicPath: '/dist/',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx$|\.js$)/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options:{
                            fallback: "file-loader",
                            name: "[name][md5:hash].[ext]",
                            outputPath: 'assets/',
                            publicPath: '/assets/'
                        }
                    }
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: ["file-loader"],
            },
            {
                test: /\.(pdf|doc|zip)$/,
                use: ["file-loader"],
            }
        ]
    },
    resolve: {
        alias: {
            'react': path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, '.node_modules/react-dom'),
            'assets': path.resolve(__dirname, 'assets')
        }
    },
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        } 
    }
};