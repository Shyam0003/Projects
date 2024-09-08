const mongoose = require('mongoose')

mongoose.connect(`mongodb://localhost:27017/authestapp`)

const userSchema = mongoose.Schema({
    username : String,
    email : String,
    password : String,
    age : Number
})

module.exports = mongoose.model("user",userSchema)