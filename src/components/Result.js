import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Result.css';

function Result() {
  const location = useLocation();
  const { imageUrl } = location.state || {};

  return (
    <div className="result">
      <h2>¡Tu gato generado!</h2>
      {imageUrl ? (
        <img src={imageUrl} alt="Gato generado por IA" />
      ) : (
        <p>No se generó ninguna imagen.</p>
      )}
      <Link to="/editor">
        <button>Generar otra imagen</button>
      </Link>
    </div>
  );
}

export default Result;
