const Replicate = require("replicate");

exports.handler = async (event) => {
	console.log("Función check-prediction iniciada");
	const { predictionId } = JSON.parse(event.body);
	console.log("ID de predicción recibido:", predictionId);

	// Simulamos un delay para imitar el tiempo de procesamiento
	await new Promise(resolve => setTimeout(resolve, 2000));

	// URL de una imagen de gato de ejemplo
	const fakeImageUrl = "https://cataas.com/cat";

	return {
		statusCode: 200,
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "Content-Type",
		},
		body: JSON.stringify({ status: "succeeded", output: [fakeImageUrl] }),
	};
};
