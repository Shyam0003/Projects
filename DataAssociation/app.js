const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');

// Simple route
app.get("/", function(req, res) {
    res.send("hey");
});

// Create a new user
app.get("/create", async function (req, res) {
    try {
        let user = await userModel.create({
            username: "harsh",
            age: 25,
            email: "shyam@gmail.com"
        });
        res.send(user);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating user");
    }
});

// Create a new post and associate it with a user
app.get("/post/create", async function (req, res) {
    try {
        // Fetch the user by email or some other unique attribute
        let user = await userModel.findOne({ email: "shyam@gmail.com" }); // Make sure the user exists
        if (!user) {
            return res.status(404).send("User not found");
        }

        // Create a new post associated with the found user
        let post = await postModel.create({
            postdata: "hello Saare log kaise ho",
            user: user._id // Use the valid ObjectId from the user document
        });

        // Add the post to the user's posts array
        user.posts.push(post._id);
        await user.save();

        res.send({ post, user });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating post or updating user");
    }``
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
