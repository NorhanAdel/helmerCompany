const express = require("express");
const router = express.Router();
const {
  getOffers,
  createOffer,
  deleteOffer,
} = require("../controller/offer");

const { authMiddleware, adminMiddleware } = require("../middleware/auth");

router.get("/", getOffers);  
router.post("/", authMiddleware, adminMiddleware, createOffer);
router.delete("/:id", authMiddleware, adminMiddleware, deleteOffer);

module.exports = router;
