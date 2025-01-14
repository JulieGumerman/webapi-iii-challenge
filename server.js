const express = require('express');
const helmet = require("helmet");
const server = express();
const userRouter = require("./users/userRouter");



//custom middleware

function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} `
  );
  next();
};

server.use(logger);
server.use(helmet());
server.use(express.json());
server.use("/api/users", userRouter);


server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});



module.exports = server;
