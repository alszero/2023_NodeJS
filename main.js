const http = require('http');
const fs = require('fs');

const app = http.createServer(function(req, res){
  let url = req.url;

  if(url === '/')
    url = '/index.html';
   // favicon : 신경쓰지 말 것. 시험 안냄 
  if(url === '/favicon.ico')
    return res.writeHead(404);

  res.writeHead(200);
    // __dirname : D:\Min\2023-NODE\문법
    const htmlCode = fs.readFileSync(__dirname + url);
    res.end(htmlCode);
});

app.listen(3333);