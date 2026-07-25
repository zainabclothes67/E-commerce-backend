const DiscountService = require("../services/discount.service");

const createDiscount = async (req, res) => {
  const discount = await DiscountService.createDiscount(req.body);
  res.status(201).json({ success: true, message: "Discount created successfully", data: discount });
};
module.exports.createDiscount = createDiscount;

const updateDiscount = async (req, res) => {
  const updated = await DiscountService.updateDiscount(req.query.id, req.body);
  res.status(200).json({ success: true, message: "Discount updated successfully", data: updated });
};
module.exports.updateDiscount = updateDiscount;

const deleteDiscount = async (req, res) => {
  await DiscountService.deleteDiscount(req.query.id);
  res.status(200).json({ success: true, message: "Discount deleted successfully" });
};
module.exports.deleteDiscount = deleteDiscount;

const getAllDiscounts = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const result = await DiscountService.getAllDiscounts(page, limit);
  res.status(200).json({ success: true, ...result });
};
module.exports.getAllDiscounts = getAllDiscounts;
