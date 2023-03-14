const mongoose = require("mongoose");
const { Schema } = mongoose;
const topicSchema = new Schema(
  {
    title: String,
    searchFrequence: Number,
    subCategoryId:{type:Schema.Types.ObjectId,ref:'subCategory'},
  },
  { timestamps: true }
);
const subCategorySchema = new Schema(
  {
    title: String,
    searchFrequence: Number,
    categoryId:{type:Schema.Types.ObjectId,ref:'category'},
    topic: [{ type: Schema.Types.ObjectId, ref: "topic" }],
  },
  { timestamps: true }
);

const categorySchema = new Schema(
  {
    title: String,
    searchFrequence: Number,
    subCategory: [{ type: Schema.Types.ObjectId, ref: "subCategory" }],
  },
  { timestamps: true }
);

const category = mongoose.model("category", categorySchema);
const topic = mongoose.model("topic", topicSchema);
const subCategory = mongoose.model("subCategory", subCategorySchema);

module.exports = {
  topic,
  subCategory,
  category,
  categorySchema,
  topicSchema,
  subCategorySchema,
};
