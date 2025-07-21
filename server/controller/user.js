
const User = require("../model/User");
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // بدون الباسورد
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "فشل في جلب المستخدمين" });
  }
};
 
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ message: "المستخدم غير موجود" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "فشل في جلب المستخدم" });
  }
};

 
exports.getMyProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "المستخدم غير موجود" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "حدث خطأ في السيرفر" });
  }
};




exports.updateUser = async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).select("-password");
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "فشل في تعديل المستخدم" });
  }
};

 
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "تم حذف المستخدم بنجاح" });
  } catch (err) {
    res.status(500).json({ error: "فشل في حذف المستخدم" });
  }
};

exports.changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword)
      return res.status(400).json({ message: "يرجى ملء جميع الحقول" });

    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "المستخدم غير موجود" });

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "كلمة المرور القديمة غير صحيحة" });

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(newPassword, salt);
    user.password = hashed;
    await user.save();

    res.status(200).json({ message: "✅ تم تغيير كلمة المرور بنجاح" });
  } catch (err) {
    res.status(500).json({ message: "حدث خطأ في السيرفر" });
  }
};
