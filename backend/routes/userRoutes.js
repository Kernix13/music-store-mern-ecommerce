import express from "express";
const router = express.Router();
import { 
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUserById,
  getUsers,
  deleteUser,
  updateUser } from "../controllers/userController.js";

// All users route
router.route('/').post(registerUser).get(getUsers);

// User profile routes
router.route('/profile').get(getUserProfile).put(updateUserProfile);

// Logout and Login user routes
router.post('/logout', logoutUser);
router.post('/login', authUser);

// Single user routes
router.route('/:id').delete(deleteUser).get(getUserById).put(updateUser);

export default router;