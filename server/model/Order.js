const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
      },
    ],
    shippingInfo: {
      name: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
      governorate: { type: String, required: true },
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["cod", "card"],
      default: "cod",
    },
    notes: {
      type: String,
    },
    status: {
      type: String,
      enum: [
        "قيد الانتظار",
        "تم التأكيد",
        "جاري التوصيل",
        "تم التوصيل",
        "تم الإلغاء",
      ],
      default: "قيد الانتظار",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
