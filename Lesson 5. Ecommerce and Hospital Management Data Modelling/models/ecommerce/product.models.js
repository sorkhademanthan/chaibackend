import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
{
    description: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true  
    },
    ratings: {
        type: Number,
        default: 0,
        min: 0,
        max: 5       
    }

},  
{
  timestamps: true
});

export const Product = mongoose.model("Product", productSchema);