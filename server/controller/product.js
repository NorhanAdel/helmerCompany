const Product = require("../model/Product");

exports.createProduct = async (req, res) => {
  try {
    const imageFromMulter = req.file?.path;

    const {
      name,
      description,
      price,
      size,
      category,
      inStock,
      image: imageFromBody,
    } = req.body;

    const product = new Product({
      name,
      description,
      price,
      size,
      category,
      inStock,
      image: imageFromMulter || imageFromBody,
    });

    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: "حدث خطأ في جلب المنتجات" });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ error: "المنتج غير موجود" });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: "حدث خطأ في جلب المنتج" });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const updated = await Product.findByIdAndUpdate(productId, req.body, {
      new: true,
    });
    res.status(201).json(updated);
  } catch (err) {
    res.status(400).json({ error: "حدث خطأ أثناء التعديل" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    await Product.findByIdAndDelete(productId);
    res.status(201).json({ message: "تم حذف المنتج بنجاح" });
  } catch (err) {
    res.status(500).json({ error: "حدث خطأ أثناء الحذف" });
  }
};
