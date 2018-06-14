# First ES6 Project

This is a github search application that was implemented using
ES6, webpack with babel.

## The goal of this application

The goal of this application is to be able to search for any github,
users, connect with them check out who they follow and their amazing repo too.

### To run this project

* Clone or download the project file.
* You must have node install in your local machine to download and install node visit [ https://nodejs.org/en/download/ ] 
* Then run npm install to install the packages from the package.json file.
* Create a webpack.config.js file with the following command to configure webpack:

1; var path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: '/dist/'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    }
};

2; var path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: '/dist/'
    },
    mode: 'development',

module:{
    loader:[
        {
            test: /\.js$/,
            loader:babel,
            query:{
                presets:['es2015']
            }
        }
    ]
}

NB: If you're using number one (1) configuration then you have to create a .babelrc file.
to configure babel to enable our ES6 get transiple to ES5 which the browser understand...

* Finally on your terminal when all is set to depoly the project check your

package.json file and run any of the webpack command save under the script : as npm start,
or npm run watch. feel free to contribute to this project...
