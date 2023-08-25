import mongoose from "mongoose"; // using Compass as opposed to mongosh
import dotenv from 'dotenv';

// Files with data for users and products
import users from './data/users.js';
import products from './data/products.js';

// The 3 models files
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';

import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map(product => {
      return {...product, user: adminUser};
    });

    await Product.insertMany(sampleProducts);

    console.log('Data imported');
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data destroyed');
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}