const axios = require('axios');

exports.handler = async (event) => {
  const { id } = JSON.parse(event.body);

  try {
    const response = await axios.get(`https://sandbox.wompi.co/v1/transactions/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.WOMPI_PRIVATE_KEY_TEST}` // Usa _PROD para producción
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    console.error('Error verifying Wompi transaction:', error.response ? error.response.data : error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al verificar la transacción' })
    };
  }
};
