import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: {
            street: String,
            city: String,
            state: String,
            zipCode: String,
            country: String,
            phonenumber: String
        },
        required: true
    },
    description: {
        type: String,
        required: true
    } ,
    doctors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    }],
    patients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    }],
    medicalRecords: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "MedicalRecord"
    }],
    ward: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    establishedYear: {
        type: Number,
        required: true
    }
    

},
{
  timestamps: true
});

export const Hospital = mongoose.model("Hospital", hospitalSchema);