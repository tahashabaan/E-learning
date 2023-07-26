const mongoose = require("mongoose");

const DiscountCodesSchema = mongoose.Schema(
  {
    code: { type: String, require: true, unique: true },
    // isPercent: { type: Boolean, required: true, default: true },
    amount: { type: Number, required: true },
    expireDate: { type: Date, require: true,},
    isActive: { type: Boolean, require: true, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('discount', DiscountCodesSchema);