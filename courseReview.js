const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseReviewSchema = new Schema(
  {
    studentId: { type: Schema.Types.ObjectId, ref: "student", index: true },
    courseId: { type: Schema.Types.ObjectId, ref: "course", index: true },
    authorId: { type: Schema.Types.ObjectId, ref: "creator", index: true },
    studentName: String,
    review: String,
    backComment: String,
    rating: Number,
  },
  { timestamps: true }
);

const courseReview = mongoose.model("courseReview", courseReviewSchema);
export { courseReview, courseReviewSchema };
