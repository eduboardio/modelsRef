const mongoose = require("mongoose");
const { lecture } = require("./lecture");
const { sectionQuiz } = require("./sectionQuiz");

const { Schema } = mongoose;
const answerSchema = new Schema(
  {
    answer: { type: String, maxlength: 1000, required: true },
    explanation: { type: String, maxlength: 1000, required: true },
    istrue: Boolean,
  },
  { timestamps: true }
);

const sectionQuestionSchema = new Schema(
  {
    question: { type: Schema.Types.String, required: true },
    isActive: Boolean,
    answers: [answerSchema],
    sectionQuizId: {
      type: Schema.Types.ObjectId,
      ref: "sectionQuiz",
      required: true,
    },
  },
  { timestamps: true }
);

const sectionQuestion = mongoose.model(
  "sectionQuestion",
  sectionQuestionSchema
);
module.exports = { sectionQuestionSchema, sectionQuestion };
// helperLetureId: {
//   type: Schema.Types.ObjectId,
//   ref: lecture,
//   required: false,
// },
