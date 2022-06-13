/* eslint-disable */
const functions = require("firebase-functions");
const axios = require("axios");
const express = require("express");
const app = express();
// const cors = require("cors")({origin: true});

/* app.get("/accounts", (req, res) => {
  const token = "hv3zmZLmRLM6ZPIQKPhRXWRNMf71MSZE";

  const config = {
    method: "get",
    url: "https://api.bagleyai.com/v1/account/117648",
    headers: {
      "x-api-key": token,
    },
  };

  axios(config)
      .then(function(response) {
        console.log(JSON.stringify(response.data));
        res.set("Access-Control-Allow-Origin", "*");
        res.send(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
});*/

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

exports.tradingAccount = functions.https.onRequest(app)

/*
exports.getTradingAccountStatistics = functions.https.onRequest((req, res) => {
  functions.logger.info(req);
  const token = "hv3zmZLmRLM6ZPIQKPhRXWRNMf71MSZE";
  const {id} = req.params.;
  console.log("old", req.params);
  console.log("params", req);
  console.log("new", req.query.params);
  cors(req, res, () => {
    if (req.method !== "GET") {
      return res.status(401).json({
        message: "Not allowed",
      });
    }

    return axios.get(`https://api.bagleyai.com/v1/statistics/${id}`, {headers: {"x-api-key": token}})
        .then((response) => {
          console.log(response.data);
          return res.status(200).json({
            message: response.data,
          });
        })
        .catch((err) => {
          return res.status(500).json({
            error: err,
          });
        });
  });
});*/

/*
app.listen(8080, () => {
  console.log("listening on port 8080");
});*/
