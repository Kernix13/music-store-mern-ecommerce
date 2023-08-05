import express from 'express';
const router = express.Router();
import { getProducts, getProductById } from "../controllers/productController.js";

// All products route
router.route('/').get(getProducts);

// Single product route
router.route('/:id').get(getProductById);

export default router;