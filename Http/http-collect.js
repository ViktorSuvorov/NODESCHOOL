const http = require('http');
const url = process.argv[2];
const concatStream = require('concat-stream');

http.get(url, (response) => {
  response.pipe(
    concatStream((data) => {
      data = data.toString();
      console.log(data.length);
      console.log(data);
    })
  );
});
