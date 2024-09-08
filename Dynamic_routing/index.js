    const express = require('express');
    const app = express();
    const path = require('path');
    const fs = require('fs');

    // Set the view engine to EJS
    app.set('view engine', 'ejs');

    // Middleware for parsing JSON and URL-encoded data
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Serve static files from the "public" directory
    app.use(express.static(path.join(__dirname, 'public')));

    // Route to handle the root URL
    app.get('/', (req, res) => {
        fs.readdir('./files', (err, files) => {
            if (err) {
                console.error('Error reading directory:', err);
                res.status(500).send('Error reading directory');
                return;
            }
            res.render('index', { 
                title: 'My EJS Page', // Pass title variable here
                message: 'Welcome to the task manager!', // Pass message variable here
                files: files 
            });
        });
    });
    // app.get('/file/:filename',function (req,res) {
    //     fs.readFile(`./file/${req.params.filename}`,"utf-8",function (err,filedata) {
    //        res.render('show',{filename:req.params.filename,filedata: filedata})
    //       })
    //   })

    app.get('/file/:filename', function (req, res) {
        const filePath = `./files/${req.params.filename}`;    
        fs.readFile(filePath, "utf-8", function (err, filedata) {
            if (err) {
                console.error('Error reading file:', err);
                res.status(500).send('Error reading file');
                return;
            }
            res.render('show', { filename: req.params.filename, filedata: filedata });
        });
    });

    app.post('/create', (req, res) => {
        const title = req.body.title.trim().replace(/[^a-zA-Z0-9]/g, '_'); // Sanitize the filename
        const filePath = `./files/${title}.txt`; // Specify the file extension

        fs.writeFile(filePath, req.body.details || '', (err) => {
            if (err) {
                console.error('Error writing file:', err);
                res.status(500).send('Error writing file');
                return;
            }
            res.redirect('/'); // Redirect to the home page after file creation
        });
    });

    app.get('/edit/:filename',function(req,res){
        res.render('edit',{filename:req.params.filename})
    })
    app.post('/edit',function (req,res) {
        fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new}`,function (err) {
            res.redirect("/")
        })
    })

    // Start the server on port 3000
    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    });