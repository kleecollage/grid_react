import React, { useState, useEffect } from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

function GridPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/grid');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('There was a problem fetching data:', error);
        const responseBody = error.response ? await error.response.text() : 'Unknown error';
        console.log('Response:', responseBody);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Grid Page</h1>
      <Grid data={data}>
        <Column field="nombre" title="Nombre" />
        <Column field="apellido" title="Apellido" />
        <Column field="correo" title="Correo" />
        <Column field="telefono" title="Teléfono" />
        <Column field="mensaje" title="Mensaje" />
      </Grid>
    </div>
  );
};

export default GridPage;
