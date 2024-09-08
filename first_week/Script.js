// const fs = require('fs')
// fs.writeFile('Hello.txt','Hello World',function(err){
//     if(err) console.error(err)
//     else console.log("Its created : ) ")
// })

// fs.readFile('Hello.txt',function(err){
//     if(err) console.error(err)
//     else console.log("Its created : ) ")
// })

// fs.rename("Hello.txt",'Hey.txt', function(err){
//     if(err) console.log(err)
//     else console.log("Done")
// })

// fs.copyFile('Hey.txt','./copy/hello.txt',function(err){
//     if(err) console.error("err")
//     else console.log("Its Done : ) ")
// })

// fs.unlink('Hey.txt',function(err){
//     if(err) console.error(err)
//     else console.log("Removed")
// })

// fs.rmdir("./copy",{recursive:true},function(err){
//     if(err) console.error(err)
//     else console.log("Removed")
// })

// HTTP ----------------------------------------------------------------------////////
// const http = require('http')
// const server = http.createServer(function (req,res) {
//     res.end('Hello World')
//   })

// server.listen(3000)

const express = require('express')
const app = express()

// app.use(function (req,res,next)  {
//   console.log('Middleware is Running')
//   next()
//   }) // middleware

app.get("/",function (req,res) {
  res.send("Hello World : ) ")
})
app.get("/about",function (req,res) {
  res.send(" This is about page : ) ")
  })
app.get("/profile",function (req,res) {
  // res.send(" This is Profile page : ) ")
  return next(new Error("Somthing went worng : ) "))
})
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
app.listen(3000)