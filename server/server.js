const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const gridRoutes = require('../routes/gridRoutes');

app.use(cors());
app.use(express.json());
app.use('/api/grid', gridRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
