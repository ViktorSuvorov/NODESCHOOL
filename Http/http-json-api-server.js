const { lstat } = require('fs');
const http = require('http');
const url = require('url');

const parseTime = (time) => {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  };
};

const formatTime = (time) => ({ unixtime: time.getTime() });

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const time = new Date(parsedUrl.query.iso);
  let result;

  if (/^\/api\/parsetime/.test(req.url)) result = parseTime(time);
  else if (/^\/api\/unixtime/.test(req.url)) result = formatTime(time);

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});
server.listen(Number(process.argv[2]));
