import React, { useState } from 'react';
import axios from 'axios';

const Paywall = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/.netlify/functions/create-wompi-transaction', {
        amount: 10000, // 10,000 pesos colombianos, por ejemplo
        description: 'Acceso Premium a CatAI',
        publicKey: process.env.REACT_APP_WOMPI_PUBLIC_KEY_TEST // Usa _PROD para producción
      });
      
      // Redirige al usuario a la página de pago de Wompi
      window.location.href = response.data.paymentUrl;
    } catch (error) {
      console.error('Error al iniciar el pago', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Acceso Premium</h2>
      <p>Paga para acceder a todas las funciones</p>
      <button onClick={handlePayment} disabled={loading}>
        {loading ? 'Procesando...' : 'Pagar ahora'}
      </button>
    </div>
  );
};

export default Paywall;
