import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import products from './data/products.js';
import productRoutes from './routes/productRoutes.js';

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running on port 5000...');
})

// All products route
app.get('/api/products', (req, res) => {
  res.json(products)
})

// Single product route
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id)
  res.json(product)
})

app.use(notFound);
app.use(errorHandler);

// Start server
const port = process.env || 5000;
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`))