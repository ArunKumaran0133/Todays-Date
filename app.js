const express = require("express");
const Express = express();

Express.get("/", (request, response) => {
  let date = new Date();
  response.send(
    `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  );
});

Express.listen(3000);

module.exports = Express;
