
const express = require('express');
const app = express();

const http = require("http");
const expressServer =   http.createServer(app)

//create socket io server
const {server} = require("socket.io")
 const io = new server(expressServer);

    app.get("/", function (req, res) {
        res.sendFile(__dirname+"/index.html")
    })


 expressServer.listen(3000, function () {
       console.log("server run in 3000 port")
 })
