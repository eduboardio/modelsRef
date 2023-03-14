const mongoose = require("mongoose");
const { Schema } = mongoose;
const {coursePurchaseSchema}=require('./coursePurchase');

const studentSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  courses: [
    {
      couseId: { type: Schema.Types.ObjectId, ref: "course", index: true },
      performance: Number,
      isCompletedOnce: Boolean,
      certificateIssued: Boolean,
      certificatePath: String,
      notes:[
        {type:Schema.Types.ObjectId,ref:'studentNote'}
      ],
      createdDate: { type: Date, default: Date.now },
    },
  ],
  purchases: [coursePurchaseSchema],
  wishList: [
    {
      couseId: { type: Schema.Types.ObjectId, ref: "course", index: true },
      createdDate: { type: Date, default: Date.now },
    },
  ],
  cart: [{ type: Schema.Types.ObjectId, ref: "course" }],
});



const student = mongoose.model("student", studentSchema);
module.exports= { student, studentSchema };
