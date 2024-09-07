import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Editor.css';

function Editor() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleGenerate = async () => {
    setIsGenerating(true);
    setError('');
    try {
      const response = await axios.post('/.netlify/functions/generate-image', {
        prompt,
      });
      const { output } = response.data;
      
      // Como ya tenemos la URL de la imagen, podemos navegar directamente a la página de resultados
      setIsGenerating(false);
      navigate('/result', { state: { imageUrl: output[0] } });
      
    } catch (error) {
      console.error('Error al generar la imagen:', error);
      setError(`Error al generar la imagen: ${error.response?.data?.details || error.message}`);
      setIsGenerating(false);
    }
  };

  return (
    <div className="editor">
      <h2>Genera una imagen de gato</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe el gato que quieres generar (por ejemplo: 'gato siamés con sombrero de vaquero')"
      />
      <button onClick={handleGenerate} disabled={isGenerating || !prompt}>
        {isGenerating ? 'Generando...' : 'Generar imagen'}
      </button>
      {isGenerating && <div className="loading">Generando tu imagen de gato...</div>}
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default Editor;
