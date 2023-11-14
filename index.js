const express = require("express");
const app = express();
var cors = require('cors')

app.use(cors())

app.get("/", function (req, res) {
  res.send("Hello World");
});

// app.get("/user/:id", function (req, res) {
//   //   const q = req.params;
//   //   console.log(q.id);
//   const q = req.query;
//   console.log(q);
//   res.send({ userid: q.name });
// });

app.get("/sound/:name", function (req, res) {
  const { name } = req.params;
  console.log(name);

  if (name == "dog") {
    res.send({ sound: "멍멍" });
  } else if ((name == "cat")) {
    res.send({ sound: "야옹" });
  } else if ((name == "fig")) {
    res.send({ sound: "꿀꿀" });
  } else {
    res.send({ sound: "알수없음" });
  }
});

app.listen(3000);
