const http = require('http');
const url = process.argv[2];
http.get(url, (responce) => {
  responce
    .on('data', (data) => {
      console.log(data);
    })
    .setEncoding('utf-8');
});
