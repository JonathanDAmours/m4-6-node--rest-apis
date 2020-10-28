"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const {
  handleClients,
  clientById,
  addClient,
  deleteClient,
} = require("./handlers/clientHandlers");
const { handleWord, randomWord, guess } = require("./handlers/hangmanHandlers");
express()
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints here

  .get("/clients", handleClients)

  .get("/client/:id", clientById)

  .post("/client", addClient)

  .delete("/client/:id", deleteClient)

  //--------Hangman-------------------//
  .get("/hangman/word/:id", handleWord)

  .get("/hangman/word", randomWord)

  .get("/hangman/guess/:id/:letter", guess)

  //catch all
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is not available.",
    });
  })

  .listen(8000, () => console.log(`Listening on port 8000`));
