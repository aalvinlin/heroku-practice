const express = require("express");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
    const songs = [{ id: 1, name: "The Final Countdown"}];

    res.status(200).json(songs);
})

const port = process.env.PORT || 5000;
server.listen(port, () => console.log("\r\nServer running on port", port, "\r\n"));