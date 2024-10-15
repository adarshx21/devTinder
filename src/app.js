const express = require("express");

const app = express();

// app.get("/user", (req,res) => {
//     res.send({firstName: "Adarsh", lastName: "Agarwal"});
// })

// app.use("/test",(req,res) => {
//     res.send("Hello from the servyuuuuuyter!");
// })

// app.use("/",(req,res) => {
//     res.send("Nmaste Adarsh I am the homepage")
// })

// app.use("/route", rH,rH2,rH3);

app.use(
  "/user",
  (req, res, next) => {
    console.log("This is route 1");
    // res.send("Route Handler 1")
    next();
  },
  (req, res, next) => {
    console.log("This is route 2");
    // res.send("Route Handler 2")
    next();
  },
  (req, res, next) => {
    console.log("This is route 3");
    // res.send("Route Handler 3")
    next();
  }
);

app.listen(7777, () => {
  console.log("Server is successfully running on port 7777...");
});
