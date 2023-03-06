import Post from "../../models/Post";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
      console.log(req.body);
    for (let i = 0; i < req.body.length; i++) {
      let p = new Post({
        title: req.body[i].title,
        description: req.body[i].description,
        image: req.body[i].image,
        date: req.body[i].date,
      });

      await p.save();
    }
    res.status(200).json({ message: "Posts added" });
  } else res.status(400).json({ message: "Invalid request" });
};

export default connectDB(handler);
