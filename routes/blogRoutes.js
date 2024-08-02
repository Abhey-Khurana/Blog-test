import { Router } from "express";
const router = Router();
import { addBlog, getBlogsByCategory } from "../controllers/blogConroller.js";
import { upload } from "../middleware/upload.js";

router.post("/blogs", upload, addBlog);
router.get("/blogs/category/:category", getBlogsByCategory);

export default router;
