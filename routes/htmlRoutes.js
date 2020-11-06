const path = require('path');
const app = require("express").Router();


module.exports = function (app) {
    app.get("/html", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

    app.get("/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    })
}

app.get("api/notes", function (req, res) {
    res.sendfile(path.join(__dirname, "notes.html"));
});

app.get("api/*", function (req, res) {
    res.sendfile(path.join(__dirname, "index.html"));
});


module.exports = app;