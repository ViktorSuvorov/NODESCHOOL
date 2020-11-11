const fs = require('fs');
const dir = process.argv[2];
const ext = process.argv[3];
const myModule = require('./mymodule');

let callback = function (err, list) {
  if (err) throw err;
  list.forEach((file) => console.log(file));
};

myModule(dir, ext, callback);
