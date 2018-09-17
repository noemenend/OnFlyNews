/*eslint-disable*/
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');

var MiniCssExtractPlugin=require('mini-css-extract-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CriticalPlugin = require('critical-plugin');


var commonConfig = {
    entry:path.join(__dirname,'src','index'),
    output: {
        filename:'bundle[hash].js',
        path:path.resolve(__dirname,'dist')
    },

    plugins: [
        new HtmlWebpackPlugin(
            {
                title:'Play',
                template:path.join(__dirname,'src','index.html'),
                minify: {
                    collapseWhitespace:true
                }
            }
          )
        

    ] ,
    module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: "babel-loader"
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader'
              },
            ],
          }
        ]
      },
    resolve: {
        alias: {
            assets:path.resolve(__dirname,'src','assets'),
            styles:path.resolve(__dirname, 'src', 'styles'),
            utils:path.resolve(__dirname,'src','utils'),
            componentes:path.resolve(__dirname,'src','componentes'),
            services:path.resolve(__dirname, 'src','services')
        }
    },
    devtool:'source-map'
};

var devConfig = {
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader',
              {
                // Loader for webpack to process CSS with PostCSS
                loader: 'postcss-loader?url=false&sourceMap=true',
                options: {
                    plugins: function () {
                        return [
                            require('autoprefixer')
                        ];
                    }
                }
              },
              'sass-loader'
            ]
          },
        ]
      },
    devServer: {
        open:true,
        overlay:true,
        port:3000,
        hot:true,
        contentBase:path.join(__dirname,'src'),
        watchContentBase:true
    }
};

var prodConfig= {
    plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].[hash].css'
        }),
        new CleanWebpackPlugin(['dist']),
        new CriticalPlugin({
          src:'index.html',
          inline:true,
          minify:true,
          dest:'index.html'
        })
      ],
      module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader'
            ]
          },
        ]
      },
    
};

module.exports = (env,argv) => 
  argv.mode === 'development'?merge(commonConfig,devConfig):
  merge(commonConfig,prodConfig);
   
    