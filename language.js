const mongoose = require("mongoose");
const { Schema } = mongoose;
const languageSchema = new Schema(
  {
    title: String,
  },
  { timestamps: true }
);
const language = mongoose.model("language", languageSchema);
module.exports = { language };
