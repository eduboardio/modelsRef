const mongoose = require("mongoose");
const { Schema } = mongoose;
const { lecture, lectureSchema } = require("./lecture");
const { sectionQuizSchema } = require("./sectionQuiz");
const { sectionAssignmentSchema } = require("./sectionAssignment");

const sectionSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    courseId: { type: Schema.Types.ObjectId, ref: "course", required: true },
    lectures: [{ type: Schema.Types.ObjectId, ref: "lecture" }],
    quizzes: [{ type: Schema.Types.ObjectId, ref: "sectionQuiz" }],
    assignment: [{ type: Schema.Types.ObjectId, ref: "sectionAssignment" }],
    sequence: [Schema.Types.ObjectId ]
  },
  { timestamps: true }
);

const section = mongoose.model("section", sectionSchema);
module.exports = { section, sectionSchema };
