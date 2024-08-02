import Blog from "../models/blog.js";
// Add a new blog
const addBlog = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const image = req.file ? req.file.path : null;

    const newBlog = await Blog.create({ title, description, image, category });
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get blogs by category
const getBlogsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const blogs = await Blog.findAll({ where: { category } });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { addBlog, getBlogsByCategory };
