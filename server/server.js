import express from 'express';
import mysql from 'mysql2';  // MySQL2 package
import cors from 'cors';
import bcrypt from 'bcryptjs';  // For password hashing
import dotenv from 'dotenv';  // To manage environment variables securely

dotenv.config(); // To use environment variables for sensitive information

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',            // Use your MySQL username
  password: 'yuvaraj093',  // Use your MySQL password
  database: 'insurencewebsite', // Replace with your actual database name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Register route
app.post('/register', (req, res) => {
  const { name, email, password, phone } = req.body;

  // Simple validation to check if the email already exists
  const checkQuery = 'SELECT * FROM users WHERE email = ?';
  db.query(checkQuery, [email], (err, results) => {
    if (err) {
      console.error('Error checking email:', err);
      return res.status(500).json({ message: 'Server error' });
    }
    if (results.length > 0) {
      // Email already exists
      return res.status(400).json({ message: 'Email already registered. Please log in.' });
    }

    // Hash the password before saving it
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        console.error('Error hashing password:', err);
        return res.status(500).json({ message: 'Server error' });
      }

      // Insert new user into the database
      const insertQuery = 'INSERT INTO users (name, email, password, phone) VALUES (?, ?, ?, ?)';
      db.query(insertQuery, [name, email, hashedPassword, phone], (err, result) => {
        if (err) {
          console.error('Error during registration query:', err);
          return res.status(500).json({ message: 'Server error' });
        }

        res.status(201).json({ message: 'Registration successful. Please log in.' });
      });
    });
  });
});

// Login route
// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) {
      console.error('Error during login query:', err);
      return res.status(500).json({ message: 'Server error' });
    } 
    
    if (results.length === 0) {
      // If no user found, return a message indicating the user is not registered
      return res.status(404).json({ message: 'User not registered. Please register to continue.' });
    }

    // Compare the hashed password with the input password
    bcrypt.compare(password, results[0].password, (err, isMatch) => {
      if (err) {
        console.error('Error comparing passwords:', err);
        return res.status(500).json({ message: 'Server error' });
      }
      
      if (isMatch) {
        // Successful login
        res.json({ message: 'Login successful', user: results[0] });
      } else {
        // Invalid password
        res.status(401).json({ message: 'Invalid email or password' });
      }
    });
  });
});

  

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
