const db = require('../server/config/dbConfig');

const gridController = {};

gridController.getGridData = async (req, res) => {
  try {
    const results = await db.query('SELECT * FROM dbo.grid');
    res.status(200).json(results.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = gridController;