import blog from "../models/BlogModel.js";
// Add a new blog
const addBlog = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const image = req.file ? req.file.path : null;

    const newBlog = await blog.create({ title, description, image, category });
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get blogs by category
const getBlogsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const blogs = await blog.findAll({ where: { category } });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const testingRoutes = (req, res) => {
  res.json("IT IS WORKING");
};

export { addBlog, getBlogsByCategory, testingRoutes };
