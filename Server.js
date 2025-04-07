require('dotenv').config();
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

const target = process.env.TARGET_URL || 'https://www.wikipedia.org';

app.use('/', createProxyMiddleware({
  target,
  changeOrigin: true,
  pathRewrite: { '^/': '' },
  headers: {
    'User-Agent': 'Mozilla/5.0',
    'Referer': target,
  },
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.setHeader('X-Forwarded-For', '');
  },
  onError: (err, req, res) => {
    res.status(500).send('Proxy error.');
  }
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`School Proxy running at port ${PORT}`);
});
