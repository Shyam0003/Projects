// const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/testingthedatabase')

// const postSchema = mongoose.Schema({
//     postdata  : String,
//     user : {
//         type: mongoose.Schema.Types.ObjectId,
//         ref : "user"
//     },
//     data:{
//         type: Date,
//         default: Date.now   
//     }
// })

// module.exports = mongoose.model('post',postSchema)
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testingthedatabase')

const postSchema = new mongoose.Schema({
    postdata: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the user who created the post
    data: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', postSchema);
