const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/keys");
const path = require("path");

let app = express();

// Express Parsing
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/dist"));
  
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
    });
  }

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port: ${port}`));