const mongoose = require("mongoose");

const DiscountCodesSchema = mongoose.Schema(
  {
    code: { type: String, require: true, unique: true },
    isPercent: { type: Boolean, require: true, default: true },
    amount: { type: Number, required: true },
    expireDate: { type: String, require: true, default: "" },
    isActive: { type: Boolean, require: true, default: true },
  },
  { timestamps: true }
);

module.exports = 