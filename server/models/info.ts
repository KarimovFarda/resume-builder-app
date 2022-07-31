import mongoose, { Schema } from "mongoose";
const resumeSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    linkedin: {
        type: String,
        required: true
    },
    websiteUrl: {
        type: String,
        required: true
    },
    universityName: {
        type: String,
        required: true
    },
    professionName: {
        type: String,
        required: true
    },
    universityStartDate: {
        type: String,
        required: true
    },
    universityEndDate: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    positionName: {
        type: String,
        required: true,
    },
    jobStartDate: {
        type: String,
        required: true
    },
    jobEndDate: {
        type: String,
        required: true
    },
    positionDetails: {
        type: String,
        required: true
    },
    skills: {
        type: String,
        required: true
    },
    certificateName: {
        type: String,
        required: true,
    },
    institutionName: {
        type: String,
        required: true,
    },
    certificateStartDate: {
        type: String,
        required: true,
    },
    certificateExpirationDate: {
        type: String,
        required: true,
    },
    hobbies: {
        type: String,
        required: true,
    }

})

export default mongoose.model("ResumeData", resumeSchema);