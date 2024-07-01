import connectDB from "../../utils/db";
import Feedback from "../../models/feedback";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectDB();
      const { name, email, rating, feedback } = req.body;
      console.log(name, email, rating, feedback);
      const newFeedback = new Feedback({
        name,
        email,
        rating,
        feedback,
      });
      await newFeedback.save();
      res.status(200).json({ message: "Success!" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}
