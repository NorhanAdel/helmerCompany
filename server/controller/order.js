const Order = require("../model/Order");
exports.createOrder = async (req, res) => {
  try {
    console.log("طلب جديد قادم:", req.body);

    const newOrder = new Order({
      user: req.user.id,
      products: req.body.products,
      shippingInfo: {
        name: req.body.shippingInfo.name,
        phone: req.body.shippingInfo.phone,
        address: req.body.shippingInfo.address,
        governorate: req.body.shippingInfo.governorate,
      },
      totalPrice: req.body.totalPrice,
      paymentMethod: req.body.paymentMethod || "cod",
      notes: req.body.notes || "",
    });

    const savedOrder = await newOrder.save();
    const populatedOrder = await savedOrder.populate("products.product");

    const formattedOrder = {
      _id: populatedOrder._id,
      items: populatedOrder.products,
      address: populatedOrder.shippingInfo.address,
      paymentMethod: populatedOrder.paymentMethod,
      notes: populatedOrder.notes,
    };

    res.status(201).json({ order: formattedOrder });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate(
      "products.product"
    );
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .populate("products.product", "name price")  
      .sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: "حدث خطأ أثناء جلب الطلبات" });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    order.status = req.body.status;
    await order.save();
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.cancelOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order.user.toString() !== req.user.id) {
      return res.status(403).json({ error: "غير مصرح لك" });
    }
    if (order.status !== "قيد الانتظار") {
      return res.status(400).json({ error: "لا يمكن إلغاء الطلب بعد تأكيده" });
    }
    order.status = "تم الإلغاء";
    await order.save();
    res.status(200).json({ message: "تم إلغاء الطلب" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
