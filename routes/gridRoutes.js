const express = require('express');
const router = express.Router();
const dbConfig = require('../server/config/dbConfig');
const sql = require('mssql');

router.get('/api/grid', (req, res) => {
  sql.connect(dbConfig, err => {
    if (err) {
      console.log(err);
      res.status(500).send('Error en el servidor al conectar con la base de datos');
      return;
    }


    const request = new sql.Request();
    request.query('SELECT * FROM dbo.grid', (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error en el servidor al obtener los datos');
        return;
      }
      res.json(result.recordset);
    });
  });
});

module.exports = router;
