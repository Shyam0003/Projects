const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/testapp1")
const userSchema = mongoose.Schema({
        image : String,
        email : String,
        name : String
})

module.exports = mongoose.model('user',userSchema)

// const mongoose = require('mongoose');

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/testapp1', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('Connected to MongoDB');
// }).catch((error) => {
//     console.error('Error connecting to MongoDB:', error.message);
// });

// // Define the user schema
// const userSchema = new mongoose.Schema({
//     image: String,
//     email: String,
//     name: String
// });

// // Register the schema as a model
// const User = mongoose.model('User', userSchema);

// // Export the model and mongoose instance
// module.exports = { User, mongoose };
