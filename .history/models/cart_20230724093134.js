const { Schema, model } = require("mongoose");

const cartSchema = Schema(
  {
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: "courses",
        required: true,
      },
    ],
    totalPrice: Number,
    totlalPriceAfterDisCount: Number,
    user:{
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    disCount: {
      type: Schema.Types.ObjectId,
      ref: "discount",
    },
  },
  { timestamps: true }
);

module.exports = model("cart", cartSchema);
