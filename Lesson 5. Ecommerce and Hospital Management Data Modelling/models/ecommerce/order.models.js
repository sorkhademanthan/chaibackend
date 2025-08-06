import mongoose from 'mongoose';
import { User } from './user.models';
import { Payment } from './payment.models';
import { Product } from './product.models';

const addressSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true  
    },
    city: {
        type: String,
        required: true   
    },
    state: {
        type: String,
        required: true  
    },
    zipCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
        
    }
})


// orderprice
// customer
// orderItems
// shippingAddress: 
// paymentMethod: [{janta nagar},{mumbai},{maharashtra},{400001},{india},{1234567890}]


const orderItemSchema = new mongoose.Schema(
{
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    }
})

const orderSchema = new mongoose.Schema(
{
    orderprice: {
        type: Number,
        required: true,
        default: 0
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    orderItems: {
        type: [orderItemSchema],
        required: true
    },
    shippingAddress: {
        type: [addressSchema],
        required: true
    },
    paymentMethod: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payment",
        required: true
    },

},
{
  timestamps: true
});

export const Order = mongoose.model("Order", orderSchema);

