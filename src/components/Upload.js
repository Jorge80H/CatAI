import React from 'react';
import { useNavigate } from 'react-router-dom';

function Upload() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/editor');
  };

  return (
    <div>
      <h2>Genera una imagen de gato</h2>
      <p>Haz clic en continuar para empezar a generar imágenes de gatos usando IA.</p>
      <button onClick={handleContinue}>
        Continuar
      </button>
    </div>
  );
}

export default Upload;
