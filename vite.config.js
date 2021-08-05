const path = require('path')
console.log(path.resolve(__dirname, './src'))

const config = {
  alias: {
    '/@/': path.resolve(__dirname, './src'),
    '/styles/': path.resolve(__dirname, './src/assets/css'),
    '/commonSrc/': path.resolve(__dirname, './src/assets/js')
  },
  base: '/personal/',
  publicDir: '/personal/',
  assetsDir: 'static',
  outDir: 'docs'
}

export default config