const mongoose = require("mongoose");

let schema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    name: {
      type: String,
    },
    aboutMe: {
      type: String,
    },
    location: {
      type: String,
    },
    desiredLocation: [
      {
        type: String,
      },
    ],
    languages: [
      {
        type: String,
      },
    ],
    education: [
      {
        institutionName: {
          type: String,
        },
        degree: {
          type: String,
        },
        startDate: {
          type: String,
        },
        endDate: {
          type: String,
        },
      },
    ],
    certifications: [
      {
        certificateName: {
          type: String,
        },
        issuedDate: {
          type: String,
        },
      },
    ],
    extraCurricular: [
      {
        title: {
          type: String,
        },
        description: {
          type: String,
        },
      },
    ],
    workExperience: [
      {
        title: {
          type: String,
        },
        company: {
          type: String,
        },
        position: {
          type: String,
        },
        type: {
          type: String,
        },
        description: {
          type: String,
        },
        startDate: {
          type: String,
        },
        endDate: {
          type: String,
        },
      },
    ],
    projects: [
      {
        title: {
          type: String,
        },
        type: {
          type: String,
        },
        description: {
          type: String,
        },
      },
    ],
    socialHandles: {
      linkedin: {
        type: String,
      },
      github: {
        type: String,
      },
      instagram: {
        type: String,
      },
      twitter: {
        type: String,
      },
      facebook: {
        type: String,
      },
    },
    references: [String],
    skills: [String],
    rating: {
      type: Number,
      max: 5.0,
      default: -1.0,
      validate: {
        validator: function (v) {
          return v >= -1.0 && v <= 5.0;
        },
        msg: "Invalid rating",
      },
    },
    resume: {
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

module.exports = mongoose.model("JobApplicantInfo", schema);
