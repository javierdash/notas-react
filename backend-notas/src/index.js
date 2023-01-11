"use strict"

const express = require("express");
const bodyParser = require("body-parser");

const app = express()

const port = 3900

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Alow-Origin", "*");
  res.header("Access-Control-Alow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-type, Accept, Access-Control-Allow-Request-Method")
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
  res.header("Allow", "GET, POST, OPTIONS, DELETE, PUT")
  next()
})

app.listen(port, () => {
  console.log("lanzando la app en el puerto " + port)
})