import Post from "../../models/Post";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    for (let i = 0; i < req.body.length; i++) {
      let p = await Post.findByIdAndUpdate(req.body[i]._id, req.body[i]);
    }
    res.status(200).json({ message: "Posts edited" });
  } else res.status(400).json({ message: "Invalid request" });
};

export default connectDB(handler);
