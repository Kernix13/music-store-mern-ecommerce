import express from 'express';
const router = express.Router();
import { 
  getProducts, 
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts
} from "../controllers/productController.js";
import { protect, admin } from '../middleware/authMiddleware.js';

// All products route
router.route('/')
  .get(getProducts)
  .post(protect, admin, createProduct);

// Top products route
router.get('/top', getTopProducts);

// Single product route
router.route('/:id')
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

// Product reviews route
router.route('/:id/reviews').post(protect, createProductReview);

export default router;