const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentNoteSchema = new Schema(
  {
    studentId: { type: Schema.Types.ObjectId, ref: "student" },
    timing: Number,
    note: { type: String, maxlength: 1500, required: true },
    courseId: { type: Schema.Types.ObjectId, ref: "course" },
  },
  { timestamps: true }
);

const studentNote = mongoose.model("studentNote", studentNoteSchema);
export { studentNote, studentNoteSchema };
