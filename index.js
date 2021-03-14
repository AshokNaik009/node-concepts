process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require("cluster");

// if (cluster.isMaster) {
//   //Causing index.js to run again in child mode
//   cluster.fork();
//   cluster.fork();
// } else {
    //Creating child instance
  const express = require("express");
  const app = express();
  const crypto = require('crypto');

  app.get("/", (req, res) => {
    crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
      console.log(' Hi there');
  })
  });

  app.get("/fast", (req, res) => {
    res.send("from fast there");
  });

  app.listen(3001);
//}
