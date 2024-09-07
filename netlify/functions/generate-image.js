const Replicate = require("replicate");

exports.handler = async (event) => {
  console.log("Función generate-image iniciada");
  try {
    const { prompt } = JSON.parse(event.body);
    console.log("Prompt recibido:", prompt);

    console.log("REPLICATE_API_TOKEN configurado:", !!process.env.REPLICATE_API_TOKEN);
    
    if (!process.env.REPLICATE_API_TOKEN) {
      throw new Error("REPLICATE_API_TOKEN no está configurado");
    }

    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN,
    });

    console.log("Iniciando predicción con Replicate");
    const output = await replicate.run(
      "black-forest-labs/flux-schnell",
      { input: { prompt } }
    );

    console.log("Predicción creada:", output);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ output }),
    };
  } catch (error) {
    console.error("Error detallado:", error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({
        error: "Error starting image generation",
        details: error.message,
        stack: error.stack,
      }),
    };
  }
};
