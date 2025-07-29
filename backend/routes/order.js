const express = require("express");
const router = express.Router();
const {
  createOrder,
  getUserOrders,

  updateOrderStatus,
  cancelOrder,
  getAllOrders,
} = require("../controller/order");

const { authMiddleware, adminMiddleware } = require("../middleware/auth");

router.post("/", authMiddleware, createOrder);
router.get("/all", authMiddleware, adminMiddleware, getAllOrders);
router.get("/my-orders", authMiddleware, getUserOrders);

router.delete("/cancel/:id", authMiddleware, cancelOrder);

router.put("/:id", authMiddleware, adminMiddleware, updateOrderStatus);

module.exports = router;
