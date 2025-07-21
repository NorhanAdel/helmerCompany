const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./Db/conn.js");
dotenv.config();
const PORT = process.env.PORT || 5000;
const product = require("./routes/product");
const order = require("./routes/order");
const authRoutes = require("./routes/auth");
const googleAuth = require("./routes/google");
const cart = require("./routes/cart");
const user = require("./routes/user");
const offer = require("./routes/offer");
const contact = require("./routes/contact");
 
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/product", product);
app.use("/api/order", order);
app.use("/api/auth", authRoutes);
app.use("/api/auth", googleAuth);
app.use("/api/cart", cart);
app.use("/api/users", user);
app.use("/api/offers", offer);
app.use("/api/contact",contact)
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
