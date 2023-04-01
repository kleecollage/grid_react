import express, { json } from 'express';
import cors from 'cors';
import gridRoutes from '../routes/gridRoutes';

const app = express();
const port = 3000;

app.use(cors());
app.use(json());
app.use('/api/grid', gridRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
