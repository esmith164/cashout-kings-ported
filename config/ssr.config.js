module.exports = {
  port: '3001',
  proxy: {
    '/api/test': {
      target: 'https://httpbin.org/get',
      changeOrigin: false
    }
  }
}
