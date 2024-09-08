// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const userModel = require('./usermodel');

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/mongopractice', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('Connected to MongoDB');
// }).catch((error) => {
//     console.error('Error connecting to MongoDB:', error.message);
// });

// Root route
// app.get('/', (req, res) => {
//     res.send("Hey");
// });

// Create route
// app.get('/create', async (req, res) => {
//     try {
//         const createdUser = await userModel.create({
//             name: "abc",
//             username: "abc0003",
//             email: "abc@gmail.com"
//         });
//         res.send(createdUser);
//     } catch (error) {
//         console.error('Error creating user:', error.message);
//         res.status(500).send('Error creating user: ' + error.message);
//     }
// });

// app.get('/update', async (req, res) => {
//     try {
//         let updatedUser = await userModel.findOneAndUpdate(
//             { username: "Shyam0003" },     // Ensure this matches the created user's username
//             { name: "Shyam Gajjar" },      // Update name
//             { new: true }                  // Return the updated document
//         );

//         if (!updatedUser) {
//             console.log('User not found or not updated');
//             return res.status(404).send('User not found or not updated');
//         }

//         console.log('Updated User:', updatedUser);
//         res.send(updatedUser);
//     } catch (error) {
//         console.error('Error updating user:', error);
//         res.status(500).send('Error updating user: ' + error.message);
//     }
// });
// // Read route
// app.get('/read', async (req, res) => {
//     try {
//         const Users = await userModel.find()
//         res.send(Users);
//     } catch (error) {
//         console.error('Error Reading user:', error.message);
//         res.status(500).send('Error Reading user: ' + error.message);
//     }
// });
// Delete route
// app.get('/delete', async (req, res) => {
//     try {
//         const Users = await userModel.findOneAndDelete({username:"Shyam0003"})
//         res.send(Users);
//     } catch (error) {
//         console.error('Error Deleting user:', error.message);
//         res.status(500).send('Error Deleting user: ' + error.message);
//     }
// });

// Start the server
// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mongopractice', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});

// Define a simple User schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    image: String,
});

const userModel = mongoose.model('User', userSchema);

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Root route to render the form
app.get('/', (req, res) => {
    res.render("index"); // Assuming index.ejs contains your form
});

// GET route to serve the create user form
app.get('/create', (req, res) => {
    res.render("create"); // Render a form to create a user
});

// POST route to handle form submission
app.post('/create', async (req, res) => {
    const { name, email, image } = req.body;
    try {
        const createdUser = await userModel.create({
            name,
            email,
            image,
        });
        res.send(createdUser)
        console.log('User created:', createdUser); // Debugging: log the created user
        // Redirect to /read to display the list of users
        res.redirect('/read');
    } catch (error) {
        console.error('Error creating user:', error.message);
        res.status(500).send('Error creating user: ' + error.message);
    }
});
app.get('/delete/:id', async (req, res) => {
    try {
        // Delete the user by their ID
        await userModel.findOneAndDelete({ _id: req.params.id });

        // Redirect to the /read route to display the updated list of users
        res.redirect('/read');
    } catch (error) {
        console.error('Error deleting user:', error.message);
        res.status(500).send('Error deleting user: ' + error.message);
    }
});

// app.post('/edit/:userid', async (req, res) => {
//     let { image, name, email } = req.body;
//     try {
//         let user = await userModel.findByIdAndUpdate(
//             req.params.userid,  // Find user by ID
//             { image, name, email },  // Fields to update
//             { new: true }  // Return the updated document
//         );
//         res.redirect("/read");
//     } catch (error) {
//         console.error("Error updating user:", error.message);
//         res.status(500).send("Error updating user: " + error.message);
//     }
// });

app.get('/edit/:userid', async (req, res) => {
    try {
        const user = await userModel.findById(req.params.userid);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.render('edit', { user }); // Renders the form with the user's data
    } catch (error) {
        console.error('Error fetching user:', error.message);
        res.status(500).send('Server Error');
    }
});

// POST route to handle form submission and update user data
app.post('/edit/:userid', async (req, res) => {
    const { name, email, image } = req.body;
    try {
        await userModel.findByIdAndUpdate(req.params.userid, { name, email, image }, { new: true });
        res.redirect("/read"); // Redirect to the page where all users are listed
    } catch (error) {
        console.error('Error updating user:', error.message);
        res.status(500).send('Error updating user: ' + error.message);
    }
});

// Route to read and display users
app.get('/read', async (req, res) => {
    try {
        const users = await userModel.find();
        res.render("read", { users }); // Render users in read.ejs
    } catch (error) {
        console.error('Error reading users:', error.message);
        res.status(500).send('Error reading users: ' + error.message);
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
