import db from '../server/config/dbConfig';

const gridController = {};

gridController.getGridData = async (req, res) => {
  try {
    const pool = await db.connectToDb();
    const result = await pool.query('SELECT * FROM dbo.grid');
    res.status(200).json(result.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default gridController;
