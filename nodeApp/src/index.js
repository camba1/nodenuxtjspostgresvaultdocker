'use strict';

const express = require('express');
const postgresdb = require('./postgresData')
// const vaultData = require('./vaultData');



// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

const os = require("os");
var hostname = os.hostname();

// App
const app = express();
app.get('/', (req, res) => {
  res.send(`Hello world!\n from host ${hostname}`);
});

app.get('/postgres', (req, res) => {
  postgresdb.getPostgresData(req, res)
  }
);
// app.get('/vault', (req, res) => {
//   console.log(pool)
//   //vaultData.getConnectDetails()
//   }
// );

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
