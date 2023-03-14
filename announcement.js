const mongoose = require("mongoose");
const { studentSchema } = require("./student");
const { Schema } = mongoose;
const announcementSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [
    {
      body: String,
      date: { type: Date, default: Date.now() },
      studentId: Schema.Types.ObjectId,
      ref: studentSchema,
      studetName: String,
    },
  ],
  date: { type: Date, default: Date.now() },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});

const announcement = mongoose.model("annoucment", announcementSchema);
module.exports = { announcement, announcementSchema };
