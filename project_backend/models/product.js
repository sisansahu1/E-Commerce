const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    maxlength: 42,
    require: true,
  },

  description: {
    type: String,
    trim: true,
    maxlength: 2000,
    require: true,
  },
  price:{
      type:Number,
      require:true,
      maxlength:32,
      trim:true
  },
  category:{
      type:ObjectId,
      ref:"Category",
      require:true,
  },
  inStock:{
      type:Number,
  },
  unitsSold:{
      type:Number,
      default:0,
  },
  photo:{
      type:Buffer,
      ContentType:String,
  }

},{timestamps:true});

module.exports = mongoose.model("Product",productSchema)