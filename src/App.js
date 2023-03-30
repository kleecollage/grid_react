import React from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Formulario from './Formulario';
import GridPage from './pages/GridPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Formulario />} />
          <Route path="/grid" element={<GridPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;  