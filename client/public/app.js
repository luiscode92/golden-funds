const express = require('express');
const axios = require('axios')
const app = express();


app.get('/accounts', (req, res) => {
    const token = 'hv3zmZLmRLM6ZPIQKPhRXWRNMf71MSZE'
    
    var config = {
      method: 'get',
      url: 'https://api.bagleyai.com/v1/account/117648',
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

app.get('/objectives', (req, res) => {
  const token = 'hv3zmZLmRLM6ZPIQKPhRXWRNMf71MSZE'
  
  var config = {
    method: 'get',
    url: 'https://api.bagleyai.com/v1/objectives/117648',
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

app.get('/statistics', (req, res) => {
  const token = 'hv3zmZLmRLM6ZPIQKPhRXWRNMf71MSZE'
  
  var config = {
    method: 'get',
    url: 'https://api.bagleyai.com/v1/statistics/117648',
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


app.listen(8080, () => {
    console.log('listening on port 8080')
})

