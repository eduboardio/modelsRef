const mongoose = require("mongoose");

let schema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
    },
    description: {
      type: String,
    },
    location: {
      type: String,
    },
    website: {
      type: String,
    },
    profile: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    dob: {
      type: String,
    },
    gender: {
      type: String,
    },
    contactNumber: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collation: { locale: "en" } }
);

module.exports = mongoose.model("RecruiterInfo", schema);
