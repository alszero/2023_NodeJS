const fs = require('fs');

// __dirname : 현재 디렉토리의 절대경로(Node의 전역변수)
console.log(__dirname);

// 해당 경로에 있는 파일 목록의 배열
const files = fs.readdirSync(__dirname);

result  = __dirname +'\\' + files[1]
console.log(result);


console.log(fs.statSync(result).isDirectory());