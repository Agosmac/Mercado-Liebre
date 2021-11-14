const express = require('express');
const app = express();

const path = require('path');

app.use(express.static('public'));

app.get("/", (req, res) => {
        res.sendFile(__dirname + '/views/index.html')
});

app.get("/register", (req, res) => {
        res.sendFile(__dirname + "/views/register.html")
});

app.get("/login", (req, res) => {
        res.sendFile(__dirname + "/views/login.html")
}); 

    app.listen(process.env.PORT || 3000, () => {console.log('servidor funcionando')});
