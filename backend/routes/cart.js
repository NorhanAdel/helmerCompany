const express = require("express");
const router = express.Router();
const {
  addToCart,
  getCart,
  removeFromCart,
  addOfferToCart,
} = require("../controller/cart");
const { authMiddleware } = require("../middleware/auth");

router.post("/add", authMiddleware, addToCart);
router.get("/", authMiddleware, getCart);
router.delete("/:productId", authMiddleware, removeFromCart);
 


module.exports = router;
