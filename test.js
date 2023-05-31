const fruits = ['apple', 'banana', 'cherry', 'apple'];
// 1. forEach를 이용해 fruits의 모든 원소를 출력하세오
fruits.forEach ((f) => {
  console.log(f);
});
// 2. 'grape'를 배열의 맨 끝에 추가하세요
fruits.push('grape');
// 3. 배열의 맨 끝 요소를 제거하고 제거된 요소를 출력하세요
a = fruits.pop()
console.log(a);

// 화살표함수 2가지 방식으로 표현
sub = (n1, n2) => {
  return n1+n2;
};
(n1, n2) => n1+n2;


