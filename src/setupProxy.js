const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  // proxy api calls
  app.use(proxy('/reading', {
    target: 'http://localhost:3030/',
    changeOrigin: true,
  }));

  // proxy websocket
  app.use(proxy('/socket.io', {
    target: 'http://localhost:3030/',
    changeOrigin: true,
    ws: true,
  }));
};
