let express = require('express');
let app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))

var filePath = __dirname + "/views/";

app.use(express.static('images'));
app.use(express.static('css'));

let db = [];

app.get("/", function(req,res){
    let fileName = filePath + "index.html";
    res.sendFile(fileName);
});

app.get("/newTask", function(req,res){
    let fileName = filePath + "newtask.html";
    res.sendFile(fileName);
});

app.post("/addNewTasks", function(req,res){
    db.push(req.body);
    res.render("listtasks", {tasks:db});
})

app.get("/listTasks", function(req,res){
    res.render("listtasks", {tasks:db});
});

app.listen(8080);
