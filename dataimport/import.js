const csv = require('csv-parser');
const fs = require('fs');
const pgp = require('pg-promise')({
  promiseLib: Promise
});
const dbConfig = require('./secret/db-config');
const db = pgp(dbConfig);

//add members
// fs.createReadStream('splatdata.csv', {encoding: "utf8"})
//   .pipe(csv()) //what does this do?
//   .on('data', function (data) {
//       data.STATUS = (data.STATUS === "In a Team") ? false:true;
//       data.LFT = (data.LFT === "") ? false:true;
//       data.NOT = (data.NOT === "") ? null:data.NOT;
//       db.none(`
//           insert into member values
//             (
//              DEFAULT,
//              $(USERNAME),
//              $(NNID),
//              null,
//              null,
//              $(RANK),
//              $(STATUS),
//              $(LFT),
//              $(NOT),
//              null,
//              null
//             )`, data)
// });


// fs.createReadStream('splatdata.csv', {encoding: "utf8"})
//   .pipe(csv()) //what does this do?
//   .on('data', function (data) {
//       data.NOT = (data.NOT === "") ? null:data.NOT;
//       data.LOGO = (data.LOGO === "") ? null:data.LOGO;
//       data.CAPTIAN = (data.CAPTIAN === "") ? null:data.CAPTIAN
//       db.none(`
//           insert into teams values
//           (
//            DEFAULT,
//            $(NOT),
//            $(LOGO),
//            $(CAPTAIN),
//            null,
//            null,
//            null,
//            null
//           )`, data)
// });

fs.createReadStream('splatdata.csv', {encoding: "utf8"})
  .pipe(csv()) //what does this do?
  .on('data', function (data) {
      let list3 = data.LIST3.split()
      console.log(list3)
      db.none(`
          insert into teams values
          (
           DEFAULT,
           $(USERNAME),
           $(LOGO),
           $(CAPTAIN),
           null,
           null,
           null,
           null
          )`, data)
});
