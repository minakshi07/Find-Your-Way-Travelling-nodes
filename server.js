//Importing express modules to host on local server.
const express = require("express");
const app = express();

app.use("/public", express.static(__dirname + "/public"))

//Importing initial homepage.
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})


app.listen(1337, () => {
  console.log("The server is up and running!");
});
//Have used nodemon plugin to restart server at each save.