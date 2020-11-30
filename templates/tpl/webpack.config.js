const fs = require('fs-extra')
const path = require('path')
const glob = require('glob')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


const outputPath = path.resolve(__dirname, 'dist')

const config = {
    mode: 'development',
    entry: {index: './src/index.js'},
    devtool:false, 
    output: {
        path: outputPath,
        filename: 'xr.test.js',
        publicPath: ''
    },
    externals: {
        XRWeb: 'commonjs XRWeb'
    },
    target: 'node', 
    node: {
        __dirname: false
    },
    optimization: {
        minimize: false,
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'images/[name].[hash:8].[ext]'
                        }
                    }
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(obj|mtl|fbx)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            // name: (resourcePath, resourceQuery) => {
                            //     let prefix = 'models'
                            //     let resourceDir = path.dirname(resourcePath)
                            //     let dirname = resourceDir.split(path.sep).pop() || ''
                            //     let basename = path.basename(resourcePath)
                            //     let resourceDest = path.join(config.output.path, prefix, dirname)
                            //     fs.copySync(resourceDir, resourceDest, {
                            //         overwrite: true,
                            //         errorOnExist: true,
                            //         filter: (a) => {
                            //             return path.basename(a) !== basename
                            //         }
                            //     })
                            //     return `${prefix}/${dirname}/[name].[ext]`
                            // }
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // new CopyWebpackPlugin({
        //     patterns: [
        //         {
        //             from: 'src/**/*',
        //             to: './',
        //             globOptions: {
        //                 ignore: ['**/*.js']
        //             }
        //         }
        //     ],
            
        // })
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './index.xml'
                },
                // {
                //     from: './src/*.test.js',
                //     flatten: true
                // },
                { 
                    from: './XRManifest.xml'
                }, {
                    from: './images/*'
                },  {
                    from: 'package.json'
                }, {
                    from: 'jest.config.js'
                }
            ]
        }),
        new CleanWebpackPlugin()
    ],
    // performance: {
    //     hints: 'error',
    //     maxAssetSize: 10000
    //     maxEntrypointSize: 1400
    // }
}

module.exports = config