const axios = require('axios');

exports.handler = async (event) => {
  const { amount, description, publicKey } = JSON.parse(event.body);

  try {
    const response = await axios.post('https://sandbox.wompi.co/v1/transactions', {
      amount_in_cents: amount * 100,
      currency: 'COP',
      name: 'Acceso Premium CatAI',
      description: description,
      public_key: publicKey,
      redirect_url: 'https://tu-app.netlify.app/payment-success',
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentUrl: response.data.data.payment_method.extra.async_payment_url })
    };
  } catch (error) {
    console.error('Error creating Wompi transaction:', error.response ? error.response.data : error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al crear la transacción' })
    };
  }
};
