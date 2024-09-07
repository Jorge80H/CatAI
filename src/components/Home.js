import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bienvenido a CatAI</h1>
      <p>Transforma fotos de tu gato con inteligencia artificial</p>
      <Link to="/upload">Comenzar</Link>
      <Link to="/login">Iniciar sesión</Link>
      <Link to="/register">Registrarse</Link>
    </div>
  );
}

export default Home;
