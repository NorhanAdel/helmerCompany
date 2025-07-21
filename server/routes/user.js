
const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  changePassword,
  getMyProfile,
} = require("../controller/user");
const { authMiddleware, adminMiddleware } = require("../middleware/auth");

 
router.get("/", authMiddleware, adminMiddleware, getAllUsers);
router.get("/:id", authMiddleware, adminMiddleware, getUserById);
router.get("/profile/me", authMiddleware, getMyProfile);

router.put("/:id", authMiddleware, adminMiddleware, updateUser);
router.delete("/:id", authMiddleware, adminMiddleware, deleteUser);
router.put("/change-password", authMiddleware, changePassword);

module.exports = router;
