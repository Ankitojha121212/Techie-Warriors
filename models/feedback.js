import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    name : String,
    email : String,
    rating : Number,
    feedback : String
});

const feedback = mongoose.models["Feedback"] ||
mongoose.model("Feedback", feedbackSchema);

export default feedback;