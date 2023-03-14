const mongoose = require("mongoose");
const { Schema } = mongoose;

const lectureSchema = new Schema(
  {
    title: { type: String, maxlength: 68 },
    description: { type: String },
    isActive: Boolean,
    sectionId: { type: Schema.Types.ObjectId, ref: "section" },
    type: { type: String, default: 'lecture' },
    lectureVideo: new Schema(
      {
        videoPath: { type: String, required: true },
        duration: { type: Schema.Types.Number },
        thumbnilPath: { type: String, required: true },
        captions: [
          new Schema({
            language: {
              type: String,
              required: true,
            },
            path: { type: String, required: true },
          }),
        ],
        menifestFile:{ type: String, required: true },
        thumbnils:[
          { type: String, required: true }
        ]
      },
      { timestamps: true }
    ),
    lectureArtical: new Schema(
      {
        text: { type: String, required: true },
        isHtml: Boolean,
      },
      { timestamps: true }
    ),
    resource: new Schema(
      {
        url: String,
        title: { type: String, maxlength: 100 },
        isExternal: Boolean,
        fromLib: Boolean,
        fromFile: Boolean,
      },
      { timestamps: true }
    ),
  },
  { timestamps: true }
);
const lecture = mongoose.model("lecture", lectureSchema);
module.exports = { lecture, lectureSchema };
