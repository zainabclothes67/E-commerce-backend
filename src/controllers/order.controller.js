const OrderService = require("../services/order.service");

const getOrderHistory = async (req, res) => {
  const page = Math.max(1, parseInt(req.query.page) || 1);
  const limit = Math.min(50, Math.max(1, parseInt(req.query.limit) || 10));
  const result = await OrderService.getOrderHistory(req.user.id, page, limit);
  res.status(200).json({ success: true, ...result });
};
module.exports.getOrderHistory = getOrderHistory;

const getOrderById = async (req, res) => {
  const order = await OrderService.getOrderById(req.params.orderId, req.user.id);
  res.status(200).json({ success: true, order });
};
module.exports.getOrderById = getOrderById;

const getAllOrders = async (req, res) => {
  const page = Math.max(1, parseInt(req.query.page) || 1);
  const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 20));
  const result = await OrderService.getAllOrders(
    page,
    limit,
    req.query.status
  );
  res.status(200).json({ success: true, ...result });
};
module.exports.getAllOrders = getAllOrders;

const updateOrderStatus = async (req, res) => {
  const { order, previousStatus } = await OrderService.updateOrderStatus(
    req.params.orderId,
    req.body.status
  );

  res.status(200).json({
    success: true,
    message: `Order status updated from "${previousStatus}" to "${order.status}"`,
    order,
  });
};
module.exports.updateOrderStatus = updateOrderStatus;

const updatePaymentStatus = async (req, res) => {
  const { order, previousPaymentStatus } = await OrderService.updatePaymentStatus(
    req.params.orderId,
    req.body.paymentStatus
  );
  res.status(200).json({
    success: true,
    message: `Payment status updated from "${previousPaymentStatus}" to "${order.payment.status}"`,
    order,
  });
};
module.exports.updatePaymentStatus = updatePaymentStatus;

const deleteOrder = async (req, res) => {
  await OrderService.deleteOrder(req.query.orderId);
  res.status(200).json({ success: true, message: "Order deleted successfully" });
};
module.exports.deleteOrder = deleteOrder;



const getOrderEmails = async (req, res) => {
  const response = await OrderService.getCustomerOrderStats({
    page: Number(req.query.page) || 1,
    limit: Number(req.query.limit) || 10,
    search: (req.query.search) || "",
  });

  res.status(200).json({
    success: true,
    message: "Order Emails Fetch Successfully",
    data: response,
  });
};
module.exports.getOrderEmails = getOrderEmails;
