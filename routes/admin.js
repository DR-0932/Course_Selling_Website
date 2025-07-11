const { Router } = require("express");
const adminRouter = Router();

adminRouter.get("/allcourses", (req, res) => {
  res.json({
    message: "signup endpoint",
  });
});

adminRouter.post("/purchase", (req, res) => {
  res.json({
    message: "signup endpoint",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
