var path = require("path");

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
/* 
================================
This is use if we dont want to configure 
babel and use babel-loader
================================
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
*/