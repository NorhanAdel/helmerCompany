const jwt = require("jsonwebtoken");
const User = require("../model/User");  
exports.authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "توكن غير موجود" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password"); 
    next();
  } catch (err) {
    return res.status(401).json({ message: "توكن غير صالح" });
  }
};

 
exports.adminMiddleware = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();  
  } else {
    res.status(403).json({ message: "أنت مش أدمن" });
  }
};
