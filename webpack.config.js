//Define what libraries we need
var webpack = require('webpack');
var path = require('path');

//setup the i/o paths
var OUTPUT_DIR = path.resolve(__dirname, 'output');
var INPUT_DIR = path.resolve(__dirname, 'input');

//create a config object
var config = {
    entry: INPUT_DIR + '/start.js',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js/, //look for js files
                include: INPUT_DIR, //in this directory
                loader: 'babel' //run the babel loader
            }
        ]
    },
    output: {
        path: OUTPUT_DIR,
        filename: 'finish.js'
    }
};

//finally make the config object available elsewhere
module.exports = config;