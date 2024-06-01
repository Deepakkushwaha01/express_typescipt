import express from "express";
/* dotenv.config(); */
var app = express();
var port = process.env.PORT || 3000;
app.get("/", function (req, res) {
    res.send("Express + TypeScript Server");
});
app.listen(port, function () {
    console.log("[server]: Server is running at http://localhost:".concat(port));
});
