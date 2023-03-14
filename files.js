const mongoose = require("mongoose");
const { Schema } = mongoose;
const fileSchema = new Schema(
  {
    fileName: { type: String, requied: true },
    meta: Schema.Types.Mixed,
    uploadedBy: {
      kind: String,
      userId: Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);

const file = mongoose.model("files", fileSchema);
module.exports = { file };
