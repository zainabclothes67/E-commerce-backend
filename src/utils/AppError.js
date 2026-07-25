class AppError extends Error {
  constructor(
    message,
    statusCode
  ) {
    super(message);
    this.name = "AppError";
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, AppError.prototype);
  }
}
module.exports.AppError = AppError;
