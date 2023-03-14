const mongoose = require("mongoose");
const { announcement, announcementSchema } = require("./announcement");
const { Schema } = mongoose;
const { courseCoupenSchema } = require("./courseCoupen");
const { lecture } = require("./lecture");
const { studentSchema } = require("./student");

const courseSchema = new Schema(
  {
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
    rating: { type: Number, default: 0 },
    language: String,
    autoGeneratedLanguage: [String],
    totalSection: Number,
    totalLecture: Number,
    totalQuiz: Number,
    totalTime: Schema.Types.Decimal128,
    cost: Schema.Types.Decimal128,
    totalEnroolment: { type: Number, default: 0 },
    creator: {
      name: String,
      authorId: { type: Schema.Types.ObjectId, ref: "creator", required: true },
    },
    position: [Schema.Types.ObjectId ],//here we are saving section position
    subAuthorDetails: {
      title: { type: String, maxlength: 100 },
      description: { type: String, maxlength: 500 },
      socialMediaHandles: { type: Map, of: String },
    },
    leaningPoints: [
      {
        title: { type: String, maxlength: 100 },
        description: { type: String, maxlength: 500 },
      },
    ],
    sections: [{ type: Schema.Types.ObjectId, ref: "section" }],
    reviewCount: Number,
    coupnes: [courseCoupenSchema],
    courseLearning: [String],
    prerequisites: [String],
    couseAttraction: [String],
    heighlightedReview: [courseCoupenSchema],
    courseImage: String,
    promotionalVideo: String,
    courseDescription: String,
    idDeleted: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    welcomeMessage: { type: String, required: false },
    congressMessage: { type: String, required: false },
    announcements: [{ type: Schema.Types.ObjectId, ref: "annoucment" }],
    demo: [
      {
        lectureId: { type: Schema.Types.ObjectId, ref: lecture },
        description: { type: String, maxlength: 100, required: true },
      },
    ],
  },
  { timestamps: true }
);

const course = mongoose.model("course", courseSchema);

module.exports = { courseSchema, course };
