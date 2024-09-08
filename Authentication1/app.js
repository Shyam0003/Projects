const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();
const userModel = require('./models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

// Home route for registration page
app.get('/', (req, res) => {
    res.render('index'); // Ensure 'index.ejs' exists for user registration
});

// User creation route (POST /create)
app.post('/create', async (req, res) => {
    let { username, email, password, age } = req.body;

    try {
        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send("User with this email already exists");
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create the user
        let createdUser = await userModel.create({
            username,
            email,
            password: hashedPassword, // Save the hashed password
            age
        });

        // Generate token and set it in cookies
        let token = jwt.sign({ email: createdUser.email }, 'shhhhhhhhhhhhhhhhhhhhhhhh');
        res.cookie("token", token);
        res.send("User created successfully");

    } catch (error) {
        console.error(error);
        res.status(500).send("Server error during user creation");
    }
});

// Login page route (GET /login)
app.get('/login', (req, res) => {
    res.render('login'); // Ensure 'login.ejs' exists for user login
});

// User login route (POST /login)
app.post('/login', async (req, res) => {
    try {
        // Find the user by email
        let user = await userModel.findOne({ email: req.body.email });

        if (!user) {
            return res.send("User not found");
        }

        // Compare password
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);

        if (isPasswordCorrect) {
            // Generate token and set it in cookies
            let token = jwt.sign({ email: user.email }, 'shhhhhhhhhhhhhhhhhhhhhhhh');
            res.cookie("token", token);
            res.send("Login successful");
        } else {
            res.send("Invalid credentials");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error during login");
    }
});

// Start the server
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
