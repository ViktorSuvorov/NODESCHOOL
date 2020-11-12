const http = require('http');
const map = require('through2-map');
const port = process.argv[2];

http
  .createServer((req, res) => {
    if (req.method !== 'POST') return res.end('Should send a POST');
    req.pipe(map((chunk) => chunk.toString().toUpperCase())).pipe(res);
  })
  .listen(+port, () => {
    console.log('Server listening...');
  });
