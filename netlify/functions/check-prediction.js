const Replicate = require("replicate");

exports.handler = async (event) => {
	console.log("Función check-prediction iniciada");
	try {
		const { output } = JSON.parse(event.body);
		console.log("Output recibido:", output);

		// Como el modelo devuelve directamente la URL, no necesitamos hacer una verificación adicional
		return {
			statusCode: 200,
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Headers": "Content-Type",
			},
			body: JSON.stringify({ status: "succeeded", output: output }),
		};
	} catch (error) {
		console.error("Error en check-prediction:", error);
		return {
			statusCode: 500,
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Headers": "Content-Type",
			},
			body: JSON.stringify({
				error: "Error checking prediction status",
				details: error.message,
			}),
		};
	}
};
