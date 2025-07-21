const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controller/auth");
const { authMiddleware, adminMiddleware } = require("../middleware/auth");
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/admin-only", authMiddleware, adminMiddleware, (req, res) => {
  res.send("أهلاً يا أدمن");
});
module.exports = router;
