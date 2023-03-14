const mongoose = require("mongoose");
const { Schema } = mongoose;

const creatorSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    profilePicPath: String,
    thumblenLink: String,
    isTemp: Boolean,
    instructorCoat: String,
    certicates: [
      {
        name: String,
        url: String,
        issuedBy: String,
        validTill: String,
        issueDate: Date,
        active: Boolean,
      },
    ],
    aboutMe: { type: String, required: true },
    experience: { type: String, required: true },
    isPartner: Boolean,
    active: Boolean,
    isDeleted: Boolean,
    email: String,
    userName: String,
    passwordHashed: String,
    tokens: [{ token: String, exprireDate: { type: Date, required: true } }],
    isBlocked: Boolean,
    preorityPercentage: Schema.Types.Decimal128,
    address: [
      {
        street: String,
        pinCode: String,
        country: Schema.Types.ObjectId,
        city: Schema.Types.ObjectId,
        lat: String,
        lng: String,
      },
    ],
    reviewCount: Number,
    studentCount: Number,
    socialMediaHandles: { type: Map, of: String },
    partnerWith: [Schema.Types.ObjectId],
    partnerWithCount: Number,
    rating: Number,
    couseTopics: [String],
  },
  { timestamps: true }
);

const creator =  mongoose.model("creator", creatorSchema);
module.exports= { creator, creatorSchema };
