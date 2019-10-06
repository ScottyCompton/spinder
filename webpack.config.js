const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// if(process.env.NODE_ENV === 'test') {
//     require('dotenv').config({path: '.env.test'});
// } else if (process.env.NODE_ENV === 'development') {
//     require('dotenv').config({path: '.env.development'});
// }

const envPath = process.env.NODE_ENV !== 'production' ? `.env.${process.env.NODE_ENV}` : '.env';
require('dotenv').config({path: envPath});


require('dotenv').config({path: `.env`})

module.exports = (env) => {
    const isProduction = env==='production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        entry: ['babel-polyfill', './src/app.js'],
        output: {
            path: path.join(__dirname,'public','dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, 
            {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap:true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
           CSSExtract,
           new webpack.DefinePlugin({
            'process.env.IMG_ASSETS_ROOT': JSON.stringify(process.env.IMG_ASSETS_ROOT),
            'process.env.IMG_CATEGORY_ROOT': JSON.stringify(process.env.IMG_CATEGORY_ROOT),
            'process.env.IMG_PRODUCT_ROOT': JSON.stringify(process.env.IMG_PRODUCT_ROOT),
            'process.env.API_ROOT': JSON.stringify(process.env.API_ROOT),
            'process.env.SHIP_RATE_PER_LB': JSON.stringify(process.env.SHIP_RATE_PER_LB)      
           })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname,'public'),
            port: 8080,
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    
    }
};