const mongoose = require("mongoose");
const { Schema } = mongoose;

const sectionQuizSchema = new Schema(
  {
    title: { type: String, required: true, maxlength: 68 },
    description: { type: String, rquired: true },
    questions: [{ type: Schema.Types.ObjectId, ref: "sectionQuestion" }],
    sectionId: { type: Schema.Types.ObjectId, ref: "section", index: true },
    type: { type: String, default: 'quiz' }
  },
  { timestamps: true }
);

const sectionQuiz = mongoose.model("sectionQuiz", sectionQuizSchema);

module.exports = { sectionQuiz, sectionQuizSchema };
