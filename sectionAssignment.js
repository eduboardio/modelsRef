const mongoose = require("mongoose");
const { Schema } = mongoose;

const sectionAssignmentSchema = new Schema(
  {
    basicInfo: {
      title: { type: String, required: true, maxlength: 100 },
      description: { type: String, required: true, maxlength: 300 },
      extimateDuration: { type: Number, required: true, min: 1 },
    },
    type: { type: String, default: 'assignment' },
    instructions: {
      type: new Schema({
        videoPath: { type: String },
        instruction: { type: String, required: true },
        resourcePath: { type: String },
      }),
      required: false,
      default: undefined,
    },
    questions: [
      new Schema(
        {
          question: { type: String, required: true, maxlength: 1000 },
        },
        { timestamps: true }
      ),
    ],
    Solution: new Schema({
      videoPath: { type: String },
      resourcePath: { type: String },
    }),
    sectionId: { type: Schema.Types.ObjectId, ref: "section", index: true },
  },
  { timestamps: true }
);

const sectionAssignment = mongoose.model(
  "sectionAssignment",
  sectionAssignmentSchema
);
module.exports = { sectionAssignmentSchema, sectionAssignment };
