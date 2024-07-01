import mongoose from "mongoose";

const inqurirySchema = new mongoose.Schema({
    name: String,
    email : String,
    mobile : Number,
    location : String,
    Query : String,
});

const Inquiry = mongoose.models['Inquiry'] || mongoose.model('Inquiry', inqurirySchema);
export default Inquiry;