const mongoose = require("mongoose");
const { Schema } = mongoose;
const coursePurchaseSchema = new Schema(
  {
    couseId: { type: Schema.Types.ObjectId, ref: "course" },
    cost: Schema.Types.Decimal128,
    coupenUsed: Schema.Types.ObjectId,
  },
  { timestamps: true }
);

const coursePurchase = mongoose.model("coursePurchase", coursePurchaseSchema);
module.exports= { coursePurchaseSchema, coursePurchase };
