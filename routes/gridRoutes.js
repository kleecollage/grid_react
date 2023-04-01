import { Router } from 'express';
import dbConfig from '../server/config/dbConfig';
import { connect, Request } from 'mssql';

const router = Router();

router.get('/', (req, res) => {
  connect(dbConfig, err => {
    if (err) {
      console.log(err);
      res.status(500).send('Error en el servidor al conectar con la base de datos');
      return;
    }


    const request = new Request();
    request.query('USE grid_react SELECT * FROM dbo.grid', (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error en el servidor al obtener los datos');
        return;
      }
      res.json(result.recordset);
    });
  });
});

export default router;
