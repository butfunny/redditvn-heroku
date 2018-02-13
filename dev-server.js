const express = require('express');
const app = express();

const server = require('http').Server(app);

app.use(express.static(__dirname));

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

server.listen(80);


