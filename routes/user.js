const { Router } = require("express");
const userRouter = Router();

userRouter.post("/login", (req, res) => {});

userRouter.post("/signup", (req, res) => {
  res.json({
    message: "signup endpoint",
  });
});

userRouter.get("/purchases", (req, res) => {});

module.exports = {
  userRouter: userRouter,
};
