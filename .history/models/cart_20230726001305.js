const { Schema, model } = require("mongoose");

const cartSchema = Schema(
  {
    items:[{
     course: {
        type: Schema.Types.ObjectId,
        ref: "courses",
        required: true,
      },
      price:{
        type: Number,
        required: true,
    }
    }],
    totalPrice: {
      type: Schema.Types.ObjectId,
      ref: "discount",
    }, 
    totlalPriceAfterDisCount: Number,
    userId:{
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    discount: {
      type: Schema.Types.ObjectId,
      ref: "discount",
    },
  },
  { timestamps: true }
);

module.exports = model("cart", cartSchema);
