const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controller/product");
const { authMiddleware, adminMiddleware } = require("../middleware/auth");

router.get("/admin-only", authMiddleware, adminMiddleware, (req, res) => {
  res.send("أهلاً يا أدمن");
});
const upload = require("../middleware/uploadImage");
router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.post("/", upload.single("image"), createProduct);
module.exports = router;
