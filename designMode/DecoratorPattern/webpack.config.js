const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    app: './es7EditClass.js' // 需要打包的文件入口
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 使用正则来匹配 js 文件
        exclude: /node_modules/, // 排除依赖包文件夹
        use: {
          loader: 'babel-loader', // 使用 babel-loader
          options: {
            presets: ['@babel/preset-env'],
            plugins:[['@babel/plugin-proposal-decorators', { legacy: true }]]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Decorator",
      template: "index.html"
    })
  ],
}
