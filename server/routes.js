
const db = require("../db/index.js");

module.exports  = {

  get: (req, res) => {
    db.query(`SELECT * FROM list`, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result)
      }
      })
  }

}
