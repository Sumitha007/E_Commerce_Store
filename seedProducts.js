require('dotenv').config({ path: __dirname + '/.env' });
const mongoose = require('mongoose');
const Product = require('./models/Product');

// Sample product data
const sampleProducts = [
  {
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    description: 'Premium wireless headphones with noise cancellation',
    stock: 50
  },
  {
    name: 'Smart Watch',
    category: 'Electronics',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    description: 'Fitness tracker with heart rate monitor',
    stock: 30
  },
  {
    name: 'Running Shoes',
    category: 'Fashion',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    description: 'Comfortable running shoes for daily wear',
    stock: 100
  },
  {
    name: 'Laptop Backpack',
    category: 'Accessories',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
    description: 'Water-resistant backpack with laptop compartment',
    stock: 75
  },
  {
    name: 'Coffee Maker',
    category: 'Home',
    price: 5999,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500',
    description: 'Automatic coffee maker with timer',
    stock: 25
  },
  {
    name: 'Yoga Mat',
    category: 'Fitness',
    price: 899,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500',
    description: 'Non-slip yoga mat with carrying strap',
    stock: 60
  },
  {
    name: 'Smartphone Case',
    category: 'Accessories',
    price: 499,
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500',
    description: 'Shockproof smartphone case',
    stock: 200
  },
  {
    name: 'Desk Lamp',
    category: 'Home',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500',
    description: 'LED desk lamp with adjustable brightness',
    stock: 40
  }
];

// Connect to MongoDB and insert sample products
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected');
    
    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');
    
    // Insert sample products
    await Product.insertMany(sampleProducts);
    console.log('Sample products added successfully');
    
    // Display the products
    const products = await Product.find();
    console.log(`Total products in database: ${products.length}`);
    
    mongoose.connection.close();
    console.log('Database connection closed');
  })
  .catch(err => {
    console.error('Error:', err);
  });
