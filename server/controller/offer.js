const Offer = require("../model/Offer");

exports.getOffers = async (req, res) => {
  try {
    const offers = await Offer.find().sort({ createdAt: -1 });
    res.status(200).json(offers);
  } catch (err) {
    res.status(500).json({ error: "حدث خطأ أثناء جلب العروض" });
  }
};

exports.createOffer = async (req, res) => {
  try {
    const newOffer = new Offer(req.body);
    const saved = await newOffer.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteOffer = async (req, res) => {
  try {
    await Offer.findByIdAndDelete(req.params.id);
    res.json({ message: "تم حذف العرض بنجاح" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
