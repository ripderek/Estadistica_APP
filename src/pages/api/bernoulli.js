// pages/api/bernoulli.js

export default function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { p, numero } = req.body;

            if (typeof p !== 'number' || p <= 0 || p >= 1) {
                return res.status(400).json({ error: 'Probabilidad de éxito "p" no válida.' });
            }

            if (typeof numero !== 'number') {
                console.log("aqui2");
                return res.status(400).json({ error: 'Número no válido.' });
            }

            //const probabilidadExito = calcularDistribucionBernoulli(p, numero);
            const probabilidadExito = p ** numero * (1 - p) ** (1 - numero);
            res.status(200).json({ probabilidadExito: probabilidadExito });
        } catch (error) {
            console.log("aqui4");
            res.status(500).json({ error: 'Error en el servidor.' });
        }
    } else {
        res.status(405).json({ error: 'Método no permitido.' });
    }
}

function calcularDistribucionBernoulli(p, numero) {
    // Calcular la probabilidad de éxito en una sola prueba
    const probabilidadExito = p ** numero * (1 - p) ** (1 - numero);
    return probabilidadExito;
}
