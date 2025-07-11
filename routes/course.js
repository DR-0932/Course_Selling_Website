const { Router } = require("express");
const courseRouter = Router();

courseRouter.get("/allcourses", (req, res) => {
  res.json({
    message: "signup endpoint",
  });
});

courseRouter.post("/purchase", (req, res) => {
  res.json({
    message: "signup endpoint",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
