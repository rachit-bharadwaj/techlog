import Post from "../../models/Post";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
  let posts = await Post.find();
  res.status(200).json({ posts });
};

export default connectDB(handler);