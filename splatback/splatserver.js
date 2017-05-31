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

app.get('/api/member', (req, resp, next) => {
  db.any('select * from member')
    .then(data => resp.json(data))
    .catch(next);
});

app.get('/api/team', (req, resp, next) => {
    db.any('select * from teams')
    .then(data => resp.json(data))
    .catch(next);
});

app.post('/api/weapons', (req, resp, next) => {
    let query = req.body.find;
    console.log(query)
    db.any(`select * from weapons where name ilike $1`,"%"+query+"%")
    .then(data => resp.json(data))
    .catch(next)
});

app.post('/api/member', (req, resp, next) => {
    let query = req.body.find;
    console.log(query)
    db.any(`select * from member where username ilike $1`,"%"+query+"%")
    .then(data => resp.json(data))
    .catch(next)
});

app.post('/api/team', (req, resp, next) => {
    let query = req.body.find;
    console.log(query)
    db.any(`select * from teams where teamname ilike $1`,"%"+query+"%")
    .then(data => resp.json(data))
    .catch(next)
});



app.listen(4000, () => console.log('Listening on 4000.'));
