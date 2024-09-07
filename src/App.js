import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Editor from './components/Editor';
import Result from './components/Result';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <div className="logo">
            <h1>GatoAI</h1>
          </div>
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/editor">Generar Imagen</Link>
            <Link to="/login">Iniciar Sesión</Link>
            <Link to="/register">Registrarse</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={
            <div className="hero">
              <h1>Genera imágenes de gatos con IA</h1>
              <p>Crea fotos increíbles de gatos en cualquier estilo o situación con nuestra avanzada inteligencia artificial.</p>
              <Link to="/editor">
                <button>Comenzar a generar</button>
              </Link>
            </div>
          } />
          <Route path="/editor" element={<Editor />} />
          <Route path="/result" element={<Result />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
