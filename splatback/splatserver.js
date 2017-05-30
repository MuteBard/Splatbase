const express = require("express");
const cors = require('cors');
const Promise = require('bluebird');
const pgp = require('pg-promise')({
  promiseLib: Promise
});

const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const dbConfig = require('./secret/db-config');
const db = pgp(dbConfig);

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get('/api/weapons', (req, resp, next) => {
  db.any('select * from weapons')
  .then(data => resp.json(data))
  .catch(next)
});

app.get('/api/weapons_small', (req, resp, next) => {
  db.any('select imagesmall from weapons')
    .then(data => resp.json(data))
    .catch(next);
});

app.get('/api/weapons_large', (req, resp, next) => {
  db.any('select imagelarge from weapons')
    .then(data => resp.json(data))
    .catch(next);
});

app.get('/api/member', (req, resp, next) => {
  db.any('select * from member')
    .then(data => resp.json(data))
    .catch(next);
});

app.listen(4000, () => console.log('Listening on 4000.'));
