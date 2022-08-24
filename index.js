var express = require("express");
var app = express();
var PORT = 8000;

app.get("/:operator/:num1/:num2", (req, res) => {
  var operator = req.params.operator;
  var a = parseInt(req.params.num1);
  var b = parseInt(req.params.num2);
  var result;

  switch (operator) {
    case "addition":
      result = a + b;
      break;
    case "subtraction":
      result = a - b;
      break;
    case "multiplication":
      result = a * b;
      break;
    default:
      result = "Sorry, please enter a valid operator!";
  }
  res.json(result);
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log("App listening on PORT:" + PORT);
});
