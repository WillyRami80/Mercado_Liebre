const express = require ('express');
const app = express();

//app.use ('/static', express.static(__dirname + '/public'));
app.use (express.static('public'));

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo")
})
app.get('/',(req, res) => {
    res.sendFile(__dirname + '/views/home.html') 
})
app.get('/login',(req,res) => {
    res.sendFile(__dirname + '/views/login.html')
})

app.post('/register',(req,res) => {
    res.sendFile(__dirname + '/views/home.html')
})

app.post('/login',(req,res) => {
    res.sendFile(__dirname + '/views/home.html')
})