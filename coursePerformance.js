const mongoose = require("mongoose");
const { Schema } = mongoose;

const courscPerformanceKindSchema = new Schema(
  {
    lectureId: { type: Schema.Types.ObjectId, index: true, required: true },
    studentId: {
      type: Schema.Types.ObjectId,
      ref: "student",
      index: true,
      required: true,
    },
    courseId: {
      type: Schema.Types.ObjectId,
      ref: "course",
      index: true,
      required: true,
    },
    completed: Boolean,
  },
  { discriminatorKey: "kind" }
);

const performaceKind = mongoose.model("coursePerformance", performanceKindSchema);

const assignmentPerformance= new Schema({
  subcomment: {
    parent: Schema.Types.ObjectId,
    index: { type: Number, min: 1, requied: true },
  },
  questionId: { type: Schema.Types.ObjectId, required: true },
  asnwer: { type: String, required: true, maxlength: 1000 },
})
performaceKind.discriminator(
  "assignment",
  assignmentPerformance
);

performaceKind.discriminator(
  "quiz",
  new Schema({
    attemp: Number,
    combined: {
      questionId: { type: Schema.Types.ObjectId, required: true },
      answer: [Schema.Types.ObjectId],
    },
    correct: Boolean,
    attemp: Boolean,
  })
);
const mode=assignmentPerformance.
module.exports= { performaceKind, courscPerformanceKindSchema,assignmentPerformance.Mp };
