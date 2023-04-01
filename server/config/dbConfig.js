import { connect } from 'mssql';

// Configuración de la base de datos
const config = {
  user: 'covidio',
  password: '1234',
  server: 'localhost', 
  database: 'grid_react',
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

// Función para conectarse a la base de datos
async function connectToDb() {
  try {
    let pool = await connect(config);
    console.log('Conexión exitosa a la base de datos');
    return pool;
  } catch (error) {
    console.error(`Error al conectarse a la base de datos: ${error}`);
  }
}

const db = {
  connectToDb
};

export default db;