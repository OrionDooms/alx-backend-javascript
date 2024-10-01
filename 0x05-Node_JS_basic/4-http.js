/**
 * This program is a small HTTP server using the http module
 */
const http = require('http');

const app = http.createServer((req, res) => {
  res.setHeader('Content-type', 'text/plain');

  res.end('Hello Holberton school!');
});

app.listen(1245, () => {
  console.log('...');
});

module.exports = app;
