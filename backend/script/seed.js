// script/seed.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

dotenv.config();

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('password123', 10), // It's essential to hash passwords
    role: 'admin',
  },
  // Add more users as needed
];

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await User.deleteMany();
    await User.insertMany(users);
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();
