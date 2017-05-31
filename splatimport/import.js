//NPM INSTALL FIRST
const csv = require('csv-parser');
const fs = require('fs');
const pgp = require('pg-promise')({
  promiseLib: Promise
});
const dbConfig = require('./secret/db-config');
const db = pgp(dbConfig);

// STEP 3 UNCOMMENT FROM LINE 10 to 31 ONLY TO INSERT MEMBERS. COMMENT WHEN FILE HAS RUN
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
//});


// STEP 4 UNCOMMENT FROM LINE 36 to 54 TO INSERT TEAMS. COMMENT WHEN FILE HAS RUN
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
