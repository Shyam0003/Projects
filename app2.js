// its a authentication and jwt and cookie code 

// const express = require('express')
// const cookieParser = require('cookie-parser')
// const bcrypt = require('bcrypt')
// const app = express()
// var jwt = require('jsonwebtoken');
// app.use(cookieParser())

// app.get("/", function (req, res) {
//   // res.cookie("name","Shyam")
//   // bcrypt.genSalt(10, function(err, salt) {
//   //     bcrypt.hash("polololololo", salt, function(err, hash) {
//           // Store hash in your password DB.
//   //         console.log(hash)
//   //     });
//   // });
//   // bcrypt.compare("polololololo", "$2b$10$vream64E8KcvOJqz45/3PO3/cbgyNQnzXJ.e13SE/i9/54B6PijwG", function(err, result) {
//   //     console.log(result)
//   // });
//   let token = jwt.sign({ email: "shyam@gmail.com" }, 'secret');
//   res.cookie("Token", token)
//   res.send("Done : ) ")
//   // console.log(token)
// })
// app.get("/read", function (req, res) {
//   let data = jwt.verify(req.cookies.token, "secret")
//   console.log(data)
//   // console.log(req.cookies.token)
// })

// app.listen(3001)