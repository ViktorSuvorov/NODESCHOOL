const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const file = process.argv[3];

http
  .createServer((req, res) => {
    fs.createReadStream(file).pipe(res);
  })
  .listen(+port, () => {
    console.log('Server listening...');
  });
