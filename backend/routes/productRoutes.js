import express from 'express';
const router = express.Router();
import { 
  getProducts, 
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from "../controllers/productController.js";
import { protect, admin } from '../middleware/authMiddleware.js';

// All products route
router.route('/')
  .get(getProducts)
  .post(protect, admin, createProduct);

// Single product route
router.route('/:id')
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

export default router;