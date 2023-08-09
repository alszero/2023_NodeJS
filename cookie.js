const express = require('express');

const app = express();

app.get("/set", (req, res) => {
  res.setHeader("Set-Cookie", "name=MY");
  res.setHeader("Set-Cookie", "age=19");
  res.send("쿠키 set");
});

// 쿠키 읽기
app.get("/get", (req, res)=>{
  const cookie = req.headers.cookie;
  if(cookie) {
    res.send(cookie);
  }
  else {
    res.send("쿠키가 없어요");
  }
});

app.listen(3000);