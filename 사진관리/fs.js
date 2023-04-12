const fs = require('fs');
const path = require('path');
//__dirname: 현재 디렉토리의 절대경로(Node의 전역 변수)
console.log(__dirname);

//해당 경로에 있는 파일 목록의 배열을 반환
const files = fs.readdirSync(__dirname);

// 문자열 합치는 것보다 join을 사용하는 것을 권장
// join을 쓰는 이유: 경로방식을 운영체제에 맞춰서 처리해 줌
//특정 파일의 전체(절대) 경로
result = path.join(__dirname, files[1]);
console.log(result);

console.log(fs.statSync(result).isFile());