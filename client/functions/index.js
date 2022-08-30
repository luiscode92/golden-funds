/* eslint-disable */
const functions = require("firebase-functions");
const axios = require("axios");
const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors({ origin: true }));

app.get("/summary/:id", (req, res) => {
  const token = "hv3zmZLmRLM6ZPIQKPhRXWRNMf71MSZE";
  const {id} = req.params;

  const config = {
    method: "get",
    url: `https://api.bagleyai.com/v1/summary/${id}`,
    headers: {
      "x-api-key": token,
    },
  };

  axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        res.set("Access-Control-Allow-Origin", "*");
        res.send(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
});

app.get('/statistics/:id', (req, res) => {
  const token = 'hv3zmZLmRLM6ZPIQKPhRXWRNMf71MSZE'
  const { id } = req.params;
  
  var config = {
    method: 'get',
    url: `https://api.bagleyai.com/v1/statistics/${id}`,
    headers: {
      'x-api-key': token,
     }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    res.set('Access-Control-Allow-Origin', '*');
    res.send(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
})

exports.tradingAccount = functions.https.onRequest(cors(app))

