const multer = require("multer");

const uploadCsv = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 50 * 1024 * 1024,
  },
});
module.exports.uploadCsv = uploadCsv;
