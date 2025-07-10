const { Router } = require("express");

const userRouter = Router();

app.post("/login", (req, res) => {});

app.post("/signup", (req, res) => {
  res.json({
    message: "signup endpoint",
  });
});

app.get("purchases", (req, res) => {});
