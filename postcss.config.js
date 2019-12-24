// sep 是路径中的分割符，是为了适配不同的操作系统
const { sep } = require('path')
// file 是编译的时候，处理的样式文件
// 它可能是css/less/sass/vue
module.exports = ({ file }) => {
  // 判断文件路径中是否包含 vant ，是否是 vant 提供的样式，如果是设置rootValue=37.5，如果是自己写的样式，设置75
  let rootValue = file.dirname.indexOf(`node_modules${sep}vant`) !== -1
    ? 37.5
    : 75

  return {
    plugins: {
      autoprefixer: {},
      'postcss-pxtorem': {
        rootValue,
        propList: ['*']
      }
    }
  }
}

// module.exports = {
//   plugins: {
//     'autoprefixer': {
//       overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
//     },
//     'postcss-pxtorem': {
//       rootValue: 75,
//       propList: ['*']
//     }
//   }
// }
