import { Router } from "express";
const router = Router();
import {
  addBlog,
  getBlogsByCategory,
  testingRoutes,
} from "../controllers/blogConroller.js";
import { upload } from "../middleware/uploadMiddleware.js";

router.post("/blogs", upload, addBlog);
router.get("/blogs/category/:category", getBlogsByCategory);
router.get("/testing", testingRoutes);
export default router;
