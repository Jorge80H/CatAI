const Replicate = require("replicate");

exports.handler = async (event) => {
  console.log("Función generate-image iniciada");
  const { prompt } = JSON.parse(event.body);
  console.log("Prompt recibido:", prompt);

  // Simulamos un delay para imitar el tiempo de procesamiento
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Generamos un ID aleatorio para simular la respuesta de Replicate
  const fakeId = Math.random().toString(36).substring(7);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    },
    body: JSON.stringify({ predictionId: fakeId }),
  };
};

function createBlankSVG() {
  const svg = `<svg width="1" height="1" xmlns="http://www.w3.org/2000/svg"></svg>`;
  return Buffer.from(svg).toString("base64");
}
