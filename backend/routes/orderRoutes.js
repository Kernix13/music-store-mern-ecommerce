import express from "express";
const router = express.Router();
import { 
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders } from "../controllers/orderController.js";
import { protect, admin } from '../middleware/authMiddleware.js';

// All orders routes 
router
  .route('/')
  .post(protect, addOrderItems)
  .get(protect, admin, getOrders);

// Logged in user orders route
router.route('/myorders').get(protect, getMyOrders);

// Single order route
router.route('/:id').get(protect, getOrderById);

// Paid order route
router.route('/:id/pay').put(protect, updateOrderToPaid);

// Delivered order route
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);

export default router;