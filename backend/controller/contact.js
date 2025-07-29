const nodemailer = require("nodemailer");

exports.sendMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ msg: "يرجى ملء الحقول المطلوبة" });
  }

 
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yourEmail@gmail.com",  
      pass: "yourAppPassword",  
    },
  });

  const mailOptions = {
    from: email,
    to: "yourEmail@gmail.com",  
    subject: subject || "رسالة جديدة من نموذج التواصل",
    text: `اسم: ${name}\nإيميل: ${email}\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ msg: "تم إرسال الرسالة إلى Gmail بنجاح" });
  } catch (err) {
    console.error("Email Error:", err);
    res.status(500).json({ msg: "فشل في إرسال الإيميل" });
  }
};
