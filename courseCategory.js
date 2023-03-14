const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseCategorySchema = new Schema({
  courseId: { type: Schema.Types.ObjectId, ref: "course", required: true },
  subCategoryId: {
    type: Schema.Types.ObjectId,
    ref: "subCategory",
    required: true,
  },
  categoryId: { type: Schema.Types.ObjectId, ref: "category", required: true },
  topicId: { type: Schema.Types.ObjectId, ref: "topic", required: true },
});
courseCategorySchema.index(
  { courseId: 1, category: 1, subCategory: 1, topic: 1 },
  { unique: true }
);
const courseCategory = mongoose.model("courseCategry", courseCategorySchema);
module.exports = { courseCategory, courseCategorySchema };
