import mongoose from 'mongoose';

const doctorsAtHospitalSchema = new mongoose.Schema({
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    timespent: {
        type: Number,
        required: true,
        default: 0
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    status: {
        type: String,
        required: true,
        enum: ['active', 'inactive'],
        default: 'active'
    }
});

const doctorSchema = new mongoose.Schema(
{
    name:{
        type: String,
        required: true,
        unique: true
    },
    salary: {
        type: Number,
        required: true
    },
    qualifications: {
        type: [String],
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    worksInHospitals: {
        type: [doctorsAtHospitalSchema],
        default: []
    }
}, {
  timestamps: true
});

export const Doctor = mongoose.model("Doctor", doctorSchema);