'use strict';

const express = require("express");
const router = express.Router();
const request = require('request');
const fs = require('fs');

router.post("/station", function (req, res) {
  var request_url = "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql";
  var request_id = req.body.body;
  var request_body = `{ bikeRentalStation(id:${req.body.body}) {
      stationId
      name
      lat
      lon
    }
  }`;
  var req_local = {
    url: request_url,
    method: 'POST',
    headers: { "Content-Type": "application/graphql" },
    body: request_body
  };

  request(req_local, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      //console.log(JSON.stringify(JSON.parse(body), null, 4));
      res.send(JSON.parse(body));
    }
  }); 
});

router.post("/stations", function (req, res) {
  var request_url = "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql";
  var request_body = `{
    bikeRentalStations {
      name
      stationId
      bikesAvailable
      spacesAvailable
      lat
      lon
    }
  }`;
  var req_local = {
    url: request_url,
    method: 'POST',
    headers: { "Content-Type": "application/graphql" },
    body: request_body
  };

  var rawdata = fs.readFileSync('notes.json', );
  let content = JSON.parse(rawdata);

  request(req_local, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      //console.log(JSON.stringify(JSON.parse(body), null, 4));
      var response_j = JSON.parse(body);
      response_j.homestation = content;
      res.send(response_j);
    }
  });
});

router.post("/home-station", function (req, res) {
  var request_body = req.body.body;
  fs.writeFile("notes.json", request_body, function(err) {
    res.send(JSON.parse(err));
  });
});

module.exports = router;