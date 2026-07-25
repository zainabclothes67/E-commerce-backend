const rateLimit = require("express-rate-limit");

const userActionLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many requests, please try again later." },
});
module.exports.userActionLimiter = userActionLimiter;


const userLoginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many login attempts. Please try again later.",
  },
});
module.exports.userLoginLimiter = userLoginLimiter;


const userRegistrationLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many registration attempts. Please try again later.",
  },
});
module.exports.userRegistrationLimiter = userRegistrationLimiter;


const adminLoginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many admin login attempts. Please try again later.",
  },
});
module.exports.adminLoginLimiter = adminLoginLimiter;

const passwordChangeLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many password change attempts, please try again later." },
});
module.exports.passwordChangeLimiter = passwordChangeLimiter;

const forgotPasswordLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many OTP requests, please try again later." },
});
module.exports.forgotPasswordLimiter = forgotPasswordLimiter;

const otpVerifyLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many OTP verification attempts, please try again later." },
});
module.exports.otpVerifyLimiter = otpVerifyLimiter;




const createOrderLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many order creation attempts. Please try again later.",
  },
});
module.exports.createOrderLimiter = createOrderLimiter;
