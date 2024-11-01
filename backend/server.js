// // // // // const express = require('express');
// // // // // const mongoose = require('mongoose');
// // // // // const cors = require('cors');
// // // // // require('dotenv').config();

// // // // // const app = express();
// // // // // app.use(cors());
// // // // // app.use(express.json());

// // // // // // MongoDB connection with retry logic
// // // // // const connectDB = async () => {
// // // // //   try {
// // // // //     await mongoose.connect(process.env.MONGO_URI, {
// // // // //       useNewUrlParser: true,
// // // // //       useUnifiedTopology: true,
// // // // //     });
// // // // //     console.log('Connected to MongoDB');
// // // // //   } catch (error) {
// // // // //     console.error('MongoDB connection error:', error);
// // // // //     setTimeout(connectDB, 5000); // Retry after 5 seconds if connection fails
// // // // //   }
// // // // // };

// // // // // connectDB();

// // // // // // Define Interview Experience Schema and Model
// // // // // const experienceSchema = new mongoose.Schema({
// // // // //   studentName: { type: String, required: true },
// // // // //   companyName: { type: String, required: true },
// // // // //   interviewerName: String,
// // // // //   interviewDate: { type: Date, default: Date.now },
// // // // //   questions: [String],
// // // // //   dataStructures: [String],
// // // // //   comments: String,
// // // // // });

// // // // // const Experience = mongoose.model('Experience', experienceSchema);

// // // // // // POST route to save interview experience
// // // // // app.post('/api/interview-experience', async (req, res) => {
// // // // //   try {
// // // // //     const experience = new Experience(req.body);
// // // // //     await experience.save();
// // // // //     res.status(201).json({ message: 'Experience saved successfully!' });
// // // // //   } catch (error) {
// // // // //     console.error('Failed to save experience:', error);
// // // // //     res.status(500).json({ message: 'Failed to save experience', error: error.message });
// // // // //   }
// // // // // });

// // // // // // GET route to fetch all interview experiences
// // // // // app.get('/api/experiences', async (req, res) => {
// // // // //   try {
// // // // //     const experiences = await Experience.find({});
// // // // //     res.status(200).json(experiences);
// // // // //   } catch (error) {
// // // // //     console.error('Error fetching experiences:', error);
// // // // //     res.status(500).json({ message: 'Failed to fetch experiences', error: error.message });
// // // // //   }
// // // // // });

// // // // // // Start the server
// // // // // const PORT = process.env.PORT || 5000;
// // // // // app.listen(PORT, () => {
// // // // //   console.log(`Server running on port ${PORT}`);
// // // // // });
// // // // const express = require('express');
// // // // const mongoose = require('mongoose');
// // // // const cors = require('cors');
// // // // require('dotenv').config();

// // // // const app = express();
// // // // app.use(cors());
// // // // app.use(express.json());

// // // // // MongoDB connection with retry logic
// // // // const connectDB = async () => {
// // // //   try {
// // // //     await mongoose.connect(process.env.MONGO_URI, {
// // // //       // useNewUrlParser: true,
// // // //       // useUnifiedTopology: true,
// // // //     });
// // // //     console.log('Connected to MongoDB');
// // // //   } catch (error) {
// // // //     console.error('MongoDB connection error:', error);
// // // //     setTimeout(connectDB, 5000); // Retry after 5 seconds if connection fails
// // // //   }
// // // // };

// // // // connectDB();

// // // // // Define Interview Experience Schema and Model
// // // // const experienceSchema = new mongoose.Schema({
// // // //   studentName: { type: String, required: true },
// // // //   companyName: { type: String, required: true },
// // // //   interviewerName: String,
// // // //   interviewDate: { type: Date, default: Date.now },
// // // //   questions: [String],
// // // //   dataStructures: [String],
// // // //   comments: String,
// // // // });

// // // // const Experience = mongoose.model('Experience', experienceSchema);

// // // // // POST route to save interview experience
// // // // app.post('/api/interview-experience', async (req, res) => {
// // // //   try {
// // // //     const experience = new Experience(req.body);
// // // //     await experience.save();
// // // //     res.status(201).json({ message: 'Experience saved successfully!' });
// // // //   } catch (error) {
// // // //     console.error('Failed to save experience:', error);
// // // //     res.status(500).json({ message: 'Failed to save experience', error: error.message });
// // // //   }
// // // // });

// // // // // GET route to fetch all interview experiences
// // // // app.get('/api/experiences', async (req, res) => {
// // // //   try {
// // // //     const experiences = await Experience.find({});
// // // //     res.status(200).json(experiences);
// // // //   } catch (error) {
// // // //     console.error('Error fetching experiences:', error);
// // // //     res.status(500).json({ message: 'Failed to fetch experiences', error: error.message });
// // // //   }
// // // // });

// // // // // Start the server
// // // // const PORT = process.env.PORT || 5000;
// // // // app.listen(PORT, () => {
// // // //   console.log(`Server running on port ${PORT}`);
// // // // });
// // // const express = require('express');
// // // const mongoose = require('mongoose');
// // // const cors = require('cors');
// // // require('dotenv').config();

// // // const app = express();
// // // app.use(cors());
// // // app.use(express.json());

// // // // MongoDB connection with retry logic
// // // const connectDB = async () => {
// // //   try {
// // //     await mongoose.connect(process.env.MONGO_URI);
// // //     console.log('Connected to MongoDB');
// // //   } catch (error) {
// // //     console.error('MongoDB connection error:', error);
// // //     setTimeout(connectDB, 5000); // Retry after 5 seconds if connection fails
// // //   }
// // // };

// // // connectDB();

// // // // Define Interview Experience Schema and Model
// // // const experienceSchema = new mongoose.Schema({
// // //   studentName: { type: String, required: true },
// // //   companyName: { type: String, required: true },
// // //   interviewerName: String,
// // //   interviewDate: { type: Date, default: Date.now },
// // //   questions: [String],
// // //   dataStructures: [String],
// // //   comments: String,
// // // });

// // // const Experience = mongoose.model('Experience', experienceSchema);

// // // // POST route to save interview experience
// // // app.post('/api/interview-experience', async (req, res) => {
// // //   try {
// // //     const experience = new Experience(req.body);
// // //     await experience.save();
// // //     res.status(201).json({ message: 'Experience saved successfully!' });
// // //   } catch (error) {
// // //     console.error('Failed to save experience:', error);
// // //     res.status(500).json({ message: 'Failed to save experience', error: error.message });
// // //   }
// // // });

// // // // GET route to fetch all interview experiences
// // // app.get('/api/experiences', async (req, res) => {
// // //   try {
// // //     const experiences = await Experience.find({});
// // //     res.status(200).json(experiences);
// // //   } catch (error) {
// // //     console.error('Error fetching experiences:', error);
// // //     res.status(500).json({ message: 'Failed to fetch experiences', error: error.message });
// // //   }
// // // });

// // // // New: GET route to fetch a single interview experience by ID
// // // app.get('/api/experiences/:id', async (req, res) => {
// // //   try {
// // //     const experience = await Experience.findById(req.params.id);
// // //     if (!experience) {
// // //       return res.status(404).json({ message: 'Experience not found' });
// // //     }
// // //     res.status(200).json(experience);
// // //   } catch (error) {
// // //     console.error('Error fetching experience by ID:', error);
// // //     res.status(500).json({ message: 'Failed to fetch experience', error: error.message });
// // //   }
// // // });

// // // // Start the server
// // // const PORT = process.env.PORT || 5000;
// // // app.listen(PORT, () => {
// // //   console.log(`Server running on port ${PORT}`);
// // // });
// // const express = require("express");
// // const mongoose = require("mongoose");
// // const cors = require("cors");
// // const bcrypt = require("bcryptjs");
// // const jwt = require("jsonwebtoken");
// // require("dotenv").config();

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // // MongoDB connection with retry logic
// // const connectDB = async () => {
// //   try {
// //     await mongoose.connect(process.env.MONGO_URI);
// //     console.log("Connected to MongoDB");
// //   } catch (error) {
// //     console.error("MongoDB connection error:", error);
// //     setTimeout(connectDB, 5000); // Retry after 5 seconds if connection fails
// //   }
// // };

// // connectDB();

// // // Define User Schema and Model
// // const userSchema = new mongoose.Schema({
// //   prn: { type: String, required: true, unique: true },
// //   password: { type: String, required: true },
// //   // Add any additional user fields you need
// // });

// // const User = mongoose.model("User", userSchema);

// // // POST route for sign up
// // app.post("/api/signup", async (req, res) => {
// //   try {
// //     const { prn, password } = req.body;

// //     // Check if the user already exists
// //     const existingUser = await User.findOne({ prn });
// //     if (existingUser) {
// //       return res.status(400).json({ message: "User already exists" });
// //     }

// //     // Hash the password
// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     // Create new user
// //     const user = new User({ prn, password: hashedPassword });
// //     await user.save();

// //     res.status(201).json({ message: "User registered successfully" });
// //   } catch (error) {
// //     console.error("Failed to register user:", error);
// //     res
// //       .status(500)
// //       .json({ message: "Failed to register user", error: error.message });
// //   }
// // });

// // // POST route for login
// // app.post("/api/login", async (req, res) => {
// //   try {
// //     const { prn, password } = req.body;

// //     // Check if the user exists
// //     const user = await User.findOne({ prn });
// //     if (!user) {
// //       return res.status(400).json({ message: "Invalid credentials" });
// //     }

// //     // Compare passwords
// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) {
// //       return res.status(400).json({ message: "Invalid credentials" });
// //     }

// //     // Generate JWT token
// //     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
// //       expiresIn: "1h",
// //     });

// //     res.status(200).json({ token });
// //   } catch (error) {
// //     console.error("Failed to log in:", error);
// //     res.status(500).json({ message: "Failed to log in", error: error.message });
// //   }
// // });

// // // Define Interview Experience Schema and Model
// // const experienceSchema = new mongoose.Schema({
// //   studentName: { type: String, required: true },
// //   companyName: { type: String, required: true },
// //   interviewerName: String,
// //   interviewDate: { type: Date, default: Date.now },
// //   questions: [String],
// //   dataStructures: [String],
// //   comments: String,
// // });

// // const Experience = mongoose.model("Experience", experienceSchema);

// // // POST route to save interview experience
// // app.post("/api/interview-experience", async (req, res) => {
// //   try {
// //     const experience = new Experience(req.body);
// //     await experience.save();
// //     res.status(201).json({ message: "Experience saved successfully!" });
// //   } catch (error) {
// //     console.error("Failed to save experience:", error);
// //     res
// //       .status(500)
// //       .json({ message: "Failed to save experience", error: error.message });
// //   }
// // });

// // // GET route to fetch all interview experiences
// // app.get("/api/experiences", async (req, res) => {
// //   try {
// //     const experiences = await Experience.find({});
// //     res.status(200).json(experiences);
// //   } catch (error) {
// //     console.error("Error fetching experiences:", error);
// //     res
// //       .status(500)
// //       .json({ message: "Failed to fetch experiences", error: error.message });
// //   }
// // });

// // // New: GET route to fetch a single interview experience by ID
// // app.get("/api/experiences/:id", async (req, res) => {
// //   try {
// //     const experience = await Experience.findById(req.params.id);
// //     if (!experience) {
// //       return res.status(404).json({ message: "Experience not found" });
// //     }
// //     res.status(200).json(experience);
// //   } catch (error) {
// //     console.error("Error fetching experience by ID:", error);
// //     res
// //       .status(500)
// //       .json({ message: "Failed to fetch experience", error: error.message });
// //   }
// // });

// // // Start the server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MongoDB connection with retry logic
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       // useNewUrlParser: true,
//       // useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//     setTimeout(connectDB, 5000); // Retry after 5 seconds if connection fails
//   }
// };

// connectDB();

// // Define User Schema and Model
// const userSchema = new mongoose.Schema({
//   prn: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   // Add any additional user fields you need
// });

// const User = mongoose.model('User', userSchema);

// // POST route for sign up
// app.post('/api/signup', async (req, res) => {
//   console.log('Sign-up request body:', req.body); // Log request body for debugging
//   try {
//     const { prn, password } = req.body;

//     // Check if the user already exists
//     const existingUser = await User.findOne({ prn });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);
    
//     // Create new user
//     const user = new User({ prn, password: hashedPassword });
//     await user.save();
    
//     res.status(201).json({ message: 'User registered successfully', user: { prn } });
//   } catch (error) {
//     console.error('Failed to register user:', error.message);
//     res.status(500).json({ message: 'Failed to register user', error: error.message });
//   }
// });

// // POST route for login
// app.post('/api/login', async (req, res) => {
//   console.log('Login request body:', req.body); // Log request body for debugging
//   try {
//     const { prn, password } = req.body;

//     // Check if the user exists
//     const user = await User.findOne({ prn });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Compare passwords
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
//     res.status(200).json({ token });
//   } catch (error) {
//     console.error('Failed to log in:', error.message);
//     res.status(500).json({ message: 'Failed to log in', error: error.message });
//   }
// });

// // Define Interview Experience Schema and Model
// const experienceSchema = new mongoose.Schema({
//   studentName: { type: String, required: true },
//   companyName: { type: String, required: true },
//   interviewerName: String,
//   interviewDate: { type: Date, default: Date.now },
//   questions: [String],
//   dataStructures: [String],
//   comments: String,
// });

// const Experience = mongoose.model('Experience', experienceSchema);

// // POST route to save interview experience
// app.post('/api/interview-experience', async (req, res) => {
//   console.log('Interview experience request body:', req.body); // Log request body for debugging
//   try {
//     const experience = new Experience(req.body);
//     await experience.save();
//     res.status(201).json({ message: 'Experience saved successfully!' });
//   } catch (error) {
//     console.error('Failed to save experience:', error.message);
//     res.status(500).json({ message: 'Failed to save experience', error: error.message });
//   }
// });

// // GET route to fetch all interview experiences
// app.get('/api/experiences', async (req, res) => {
//   try {
//     const experiences = await Experience.find({});
//     res.status(200).json(experiences);
//   } catch (error) {
//     console.error('Error fetching experiences:', error.message);
//     res.status(500).json({ message: 'Failed to fetch experiences', error: error.message });
//   }
// });

// // New: GET route to fetch a single interview experience by ID
// app.get('/api/experiences/:id', async (req, res) => {
//   try {
//     const experience = await Experience.findById(req.params.id);
//     if (!experience) {
//       return res.status(404).json({ message: 'Experience not found' });
//     }
//     res.status(200).json(experience);
//   } catch (error) {
//     console.error('Error fetching experience by ID:', error.message);
//     res.status(500).json({ message: 'Failed to fetch experience', error: error.message });
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// app.get('/',(req,res{
//   res.send('Hello World');
// })
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection with retry logic
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    setTimeout(connectDB, 5000); // Retry after 5 seconds if connection fails
  }
};

connectDB();

// User schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  prn: { type: String, unique: true },
  password: String,
  branch: String,
  yearOfPassing: Number,
});

const User = mongoose.model('User', userSchema);

// Interview Experience schema
const experienceSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  companyName: { type: String, required: true },
  interviewerName: String,
  interviewDate: { type: Date, default: Date.now },
  questions: [String],
  dataStructures: [String],
  comments: String,
});

const Experience = mongoose.model('Experience', experienceSchema);

// Sign-up route
app.post('/api/signup', async (req, res) => {
  const { firstName, lastName, prn, password, branch, yearOfPassing } = req.body;

  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ firstName, lastName, prn, password: hashedPassword, branch, yearOfPassing });

  try {
    await newUser.save();
    res.status(201).json({ message: 'User created successfully!' });
  } catch (error) {
    res.status(400).json({ message: 'Error creating user: ' + error.message });
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  const { prn, password } = req.body;

  try {
    const user = await User.findOne({ prn });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials!' });
    }

    // Compare the password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials!' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in: ' + error.message });
  }
});

// POST route to save interview experience
app.post('/api/interview-experience', async (req, res) => {
  console.log('Interview experience request body:', req.body); // Log request body for debugging
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(201).json({ message: 'Experience saved successfully!' });
  } catch (error) {
    console.error('Failed to save experience:', error.message);
    res.status(500).json({ message: 'Failed to save experience', error: error.message });
  }
});

// GET route to fetch all interview experiences
app.get('/api/experiences', async (req, res) => {
  try {
    const experiences = await Experience.find({});
    res.status(200).json(experiences);
  } catch (error) {
    console.error('Error fetching experiences:', error.message);
    res.status(500).json({ message: 'Failed to fetch experiences', error: error.message });
  }
});

// GET route to fetch a single interview experience by ID
app.get('/api/experiences/:id', async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    res.status(200).json(experience);
  } catch (error) {
    console.error('Error fetching experience by ID:', error.message);
    res.status(500).json({ message: 'Failed to fetch experience', error: error.message });
  }
});

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
