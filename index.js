const express = require("express");

const app = express();

// login route
app.post("/user/login", (req, res) => {});
app.post("/user/signup", (req, res) => {
  res.json({
    message: "signup endpoint",
  });
});
app.post("/course/purchase", (req, res) => {});
app.get("/allcourses", (req, res) => {});
app.get("/user/yourcourses", (req, res) => {});

app.listen(3000);
