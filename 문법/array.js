const arr = ['apple', 'banna', 'cherry', 'apple'];

// data: 데이터, index: 데이터에 해당되는 idx(생략가능)
arr.forEach(function(data, index){
  console.log(`${index} : ${data}`);
});