const path = require('path')
export default {
  resolve: {
    alias: {
      '@': path.join(__dirname, './src/'),
      'styles': path.join(__dirname, './src/assets/css/'),
      'commonSrc': path.join(__dirname, './src/assets/js/')
    }
  },
  build: {
    outDir: 'docs'
  }
}