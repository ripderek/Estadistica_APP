// pages/api/poisson.js
export default function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { tasaMedia, numeroEventos } = req.body;

            if (typeof tasaMedia !== 'number' || tasaMedia <= 0) {
                return res.status(400).json({ error: 'Tasa media no válida.' });
            }

            if (typeof numeroEventos !== 'number' || numeroEventos < 0) {
                return res.status(400).json({ error: 'Número de eventos no válido.' });
            }

            const probabilidad = calcularDistribucionPoisson(tasaMedia, numeroEventos);

            res.status(200).json({ probabilidad: probabilidad });
        } catch (error) {
            res.status(500).json({ error: 'Error en el servidor.' });
        }
    } else {
        res.status(405).json({ error: 'Método no permitido.' });
    }
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function calcularDistribucionPoisson(tasaMedia, numeroEventos) {
    const probabilidad =
        (Math.exp(-tasaMedia) * Math.pow(tasaMedia, numeroEventos)) / factorial(numeroEventos);
    return probabilidad;
}
