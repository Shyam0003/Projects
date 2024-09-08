// const app = express()
// const path = require('path')

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))  // This line of code helps your Express server understand data sent from an HTML form.
// app.use(express.static(path.join(__dirname,'public'))) // This is for linking public files
// static files - images, css file , js file etc
// app.set('view engine','ejs')
// app.get("/",
//     function (req, res) {
//         res.render("index") // its rendring ejs file data 
//     },
// );
// app.get("/profile/:username",
//     function (req, res) {
//         res.send(`Its working ${req.params.username}` ) // its rendring ejs file data 
//     },
// );
// app.get("/author/:username/:age",
//     function (req, res) {
//         res.send(`Hello  ${req.params.username} & age is ${req.params.age}` ) // its rendring ejs file data 
//     },
// );


// app.listen(3000,function(){
//     console.log(" Its running :  ) ")
// })
