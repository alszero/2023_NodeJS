const express = require('express');
const path = require('path');
const app = express();

console.log(__dirname);

app.use(express.static(path.join(__dirname, 'grace', 'html')));

// 모든 경로에 요청
app.get('*', function(req, res, next){
  console.log('메렁렁');
  next();
})

// 루트 경로에 get으로 요청하는 경우
app.get('/', function(req, res, next) {
  console.log('롱롱이지롱');
  next();
});

app.get('/test/:name', function(req, res, next) {
  console.log('path', req.path);
  console.log('params', req.params);
  console.log('query', req.query);
  res.send('test중 콘솔을 보시오');
})

app.listen(3333);
