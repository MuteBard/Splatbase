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
app.use(bodyParser.urlencoded({ extended: false }));

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


app.post('/api/memberselect/:id', (req, resp, next) => {
    let query = req.body.id;
    console.log(query)
    db.one(`select * from member where id = $1`, query)
    .then(data => resp.json(data))
    .catch(next)
});

app.post('/api/memberwepselect/:id', (req, resp, next) => {
    let query = req.body.id;
    console.log(query)
    db.any(`select member.* from memberhasweapon left outer join member	on memberhasweapon.member = member.id where weapon = $1`, query) //aquire an array of member ids that use the particular weapon
    .then(data => resp.json(data))
    .catch(next)
});


app.post('/api/team', (req, resp, next) => {
    let query = req.body.find;
    console.log(query)
    db.any(`select * from teams where teamname ilike $1`,"%"+query+"%")
    .then(data => resp.json(data))
    .catch(next)
})

app.post('/api/addmember', (req,resp,next) => {
  let query = req.body.addmember;
  console.log(query)

  db.one(`select teamname from teams where id = $1`, query.team) //any turns a result into an array. one will strip away that array
  .then((result) => (db.any(`insert into member (username, nnid, currteam) values ($1, $2, $3)`,[query.username , query.nnid, result.teamname])))
  .then(data => resp.json(data))
  .catch(next)
})


app.listen(4000, () => console.log('Listening on 4000.'));
