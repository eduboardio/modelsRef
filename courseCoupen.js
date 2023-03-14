

const mongoose = require("mongoose");
const { Schema } = mongoose;


const courseCoupenSchema=new Schema({
    title:{type:String,required:true,maxlenngth:10,index:true},
    costPercentage:Schema.Types.Decimal128,
    cretorId:{type:Schema.Types.ObjectId,ref:'creator'},
    courseId:{type:Schema.Types.ObjectId,ref:'course'},
    validTill:Date
},{timestamps:true});

const courseCoupen=mongoose.model('courseCoupen',courseCoupenSchema);
module.exports= {courseCoupenSchema,courseCoupen};