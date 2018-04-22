const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {//可以配置
    contentBase: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'babel-loader',
        options: {
          presets: [
              'react',[
                  'env',
                  {
                    "modules": false,
                    "targets": {
                       "browsers": ["ie >=9"]
                    },
                    "useBuiltIns": true,
                    "debug": true
                  }
              ]
          ],
	      plugins:[]
        }
      }
    ]
  }
}