import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
{
    paymentMethod: {
        type: String,       
        required: true,
        enum: ["Credit Card", "Debit Card", "PayPal", "Bank Transfer"]
    },
    paymentStatus: {
        type: String,
        required: true,
        enum: ["Pending", "Completed", "Failed"],
        default: "Pending"
    },
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true
    },
    transactionId: {
        type: String,
        required: true,
        unique: true
    },
    paymentDate: {
        type: Date,
        default: Date.now
    }
},
{
  timestamps: true
});

export const Payment = mongoose.model("Payment", paymentSchema);