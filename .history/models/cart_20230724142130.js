const { Schema, model } = require("mongoose");

const cartSchema = Schema(
  {
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: "courses",
        required: true,
      },
      price:Number
    ],
    totalPrice: Number,
    totlalPriceAfterDisCount: Number,
    userId:{
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
