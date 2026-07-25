const { User } = require("../models/UserModel");
const { AppError } = require("../utils/AppError");

const getUserById = async (id) => {
  const user = await User.findById(id).select("-password");
  if (!user) throw new AppError("User not found", 404);
  return user;
};
module.exports.getUserById = getUserById;

const updateUserProfile = async (
  id,
  fields
) => {
  const sanitized = Object.fromEntries(
    Object.entries(fields).filter(([, v]) => v !== undefined)
  );
  if (sanitized.email) {
    const taken = await User.findOne({ email: sanitized.email, _id: { $ne: id } });
    if (taken) throw new AppError("Email already in use", 400);
  }
  const user = await User.findByIdAndUpdate(id, sanitized, {
    new: true,
    runValidators: true,
  }).select("-password");
  if (!user) throw new AppError("User not found", 404);
  return user;
};
module.exports.updateUserProfile = updateUserProfile;

const changeUserPassword = async (
  id,
  currentPassword,
  newPassword
) => {
  const user = await User.findById(id).select("+password");
  if (!user) throw new AppError("User not found", 404);
  const isMatch = await user.comparePassword(currentPassword);
  if (!isMatch) throw new AppError("Current password is incorrect", 401);
  user.password = newPassword;
  await user.save();
};
module.exports.changeUserPassword = changeUserPassword;

const updateUserAddress = async (id, fields) => {
  const sanitized = Object.fromEntries(
    Object.entries(fields).filter(([, v]) => v !== undefined)
  );
  const user = await User.findByIdAndUpdate(
    id,
    { address: sanitized },
    { new: true, runValidators: true }
  ).select("-password");
  if (!user) throw new AppError("User not found", 404);
  return user.address;
};
module.exports.updateUserAddress = updateUserAddress;

const deleteUserAddress = async (id) => {
  const user = await User.findByIdAndUpdate(
    id,
    { $unset: { address: "" } },
    { new: true }
  ).select("-password");
  if (!user) throw new AppError("User not found", 404);
  return user.address;
};
module.exports.deleteUserAddress = deleteUserAddress;
