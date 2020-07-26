const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;


const productInCartSchema = mongoose.Schema({
        product:{
            type:ObjectId,
            ref:"Product",
        },
        count:{
            type:Number
        },
        price:{
            type:Number
        }
})

const orderSchema = mongoose.Schema({
    purchases:[productInCartSchema],
    transactionId:{},
    amount:Number,
    address:{
        type:String
    },
    updated:Date,
    user:{
        type:ObjectId,
        ref:"User",
    } 
},{timestamps:true})

const Order = mongoose.model("Order",orderSchema);
const cartProduct = mongoose.model("cartProduct",productInCartSchema);
module.exports = {Order,cartProduct}