# webpack_init
webpack init process：Record webpack building process <br> 
做个笔记，webpack react 项目初始化搭建过程 <br> 
默认：已经安装nodeJS，TortoiseGit <br> 
##### 第一步：
  创建github仓库
##### 第二步：
  新建目录并进入该目录：mkdir webpackInit && cd webpackInit
##### 第三步：
  拉取git：git clone https://github.com/danwangdejiyi/webpack_init.git
##### 第四步：
  初始化npm：npm init -y
##### 第五步：
  安装webpack和webpack-cli（由于webpack4+需要全局安装才能使用，所以先全局安装再本地安装） <br>
  1、全局安装 <br>
    npm install --global webpack  <br>
    npm i -g webpack-cli <br>
  2、本地安装 <br>
    npm install --save-dev webpack-cli <br>
    npm i -D webpack-cli <br>
##### 第六步：
  webpack测试 <br>
  1、新建index.js <br>
  2、测试：webpack4需要指定mode（development、production、none），-o 指输出 <br>
    npx webpack --mode development index.js -o main.js <br>
  3、测试完成后新建src目录，并将index.js移入src目录下，删除main.js <br>
    mkdir src && move index.js ./src
  4、新建dist目录并新建index.html，引入main.js（webpack4+默认将index.js输出为main.js）
##### 第七步：
  安装热更新：webpack-dev-server：npm i -D webpack-dev-server <br>
  1、测试webpack-dev-server <br>
  npx webpack-dev-server --mode development --content-base ./dist <br>
  输出Compiled successfully. 表示成功了
##### 第八步：
  1、安装react和react-dom <br>
    npm i -D react react-dom <br>
  2、测试react，src目录的index.js输入react测试
    import React from 'react' <br>
    import ReactDOM from 'react' <br>
    ReactDOM.render( <br>
      <div>Hello webpack</div>, <br>
      document.querySelector('#app') <br>
    ) <br>
    ctrl s :保存之后报错，因为webpack读不懂jsx语法，故需要安装babel-loader等babel工具 <br>
  3、安装babel包 ，解析jsx，es6转es5等 <br>
    npm i -D babel-loader <br>
    npm i -D babel-core <br>
    npm i -D babel-preset-react <br>
    npm i -D babel-cli <br>
    npm i -D babel-preset-env <br>
      需要新建：.babelrc文件 <br>
      写入： <br>
      { 
         "presets": ["react","env"], 
         "plugins": [] 
      }   ___需要与webpack.config.js中的presets字段对应___ <br>
    /* 官方推荐使用babel-preset-env，以方便es20**系列的使用 <br>
      npm i -D babel-preset-es2015（es6转换，，已放弃，应该使用 babel-preset-env，支持全部es） <br>
      npm i -D babel-preset-stage-1（分别为es支持） <br>
    */ <br>
    npm install babel-polyfill@next --save-dev <br>
    安装babel-polyfill es6转es5（用于实现浏览器不支持原生功能的代码） <br>
    修改上面的.babelrc文件，将presets选项中的"env"修改为
        [
            "env",
            {
                "modules": false,
                "targets": {
                   "browsers": ["ie >=9"]
                },
                "useBuiltIns": true,
                "debug": true
            }
        ]
    4、新建webpack.config.js文件 <br>
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
              presets: ['react','env'],___需要 .babelrc文件z红的presets字段对应___
              plugins:[]
            }
          }
        ]
      }
    } <br>
    5、重新启动webpack-dev-server <br>
    npx webpack-dev-server
##### 第九步：
  1、配置package.json <br>
  
##### 第十步：
  1、配置webpack.config.js <br>







# other 相关命令
##### 1、npm命令
  npm install （安装，缩写：i）  package-name（npm包） --global（安装范围：全局安装--global，缩写-g 和 本地安装--save-dev，缩写-D）<br>
  npm uninstall（卸载） package-name <br>
  npm root -g（查看全局安装目录） <br>
  npm root --save-dev(查看本地安装目录，缩写：-D) <br>
