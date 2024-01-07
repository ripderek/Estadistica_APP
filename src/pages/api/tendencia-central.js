// pages/api/calculos.js
export default function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { datos } = req.body;

            if (!datos || !Array.isArray(datos) || datos.length === 0) {
                return res.status(400).json({ error: 'Datos no válidos o vacíos.' });
            }

            const Media = calcularMedia(datos);
            const Moda = calcularModa(datos);
            const Mediana = calcularMediana(datos);

            res.status(200).json({ Media: Media, Moda: Moda, Mediana: Mediana });
        } catch (error) {
            res.status(500).json({ error: 'Error en el servidor.' });
        }
    } else {
        res.status(405).json({ error: 'Método no permitido.' });
    }
}

function calcularMedia(datos) {
    const suma = datos.reduce((acc, valor) => acc + valor.num, 0);
    return suma / datos.length;
}

function calcularModa(datos) {
    const frecuencias = {};

    // Calcular la frecuencia de cada número
    datos.forEach((item) => {
        frecuencias[item.num] = (frecuencias[item.num] || 0) + 1;
    });

    // Encontrar el número con la mayor frecuencia
    let moda;
    let maxFrecuencia = 0;

    Object.keys(frecuencias).forEach((numero) => {
        const frecuencia = frecuencias[numero];

        if (frecuencia > maxFrecuencia) {
            moda = parseFloat(numero);
            maxFrecuencia = frecuencia;
        }
    });

    return moda;
}

function calcularMediana(datos) {
    // Ordenar el conjunto de datos por el valor numérico
    const datosOrdenados = datos.slice().sort((a, b) => a.num - b.num);

    const cantidadDatos = datosOrdenados.length;

    // Calcular la mediana
    if (cantidadDatos % 2 === 0) {
        // Si hay un número par de datos, calcular el promedio de los dos valores centrales
        const medioSuperior = datosOrdenados[cantidadDatos / 2];
        const medioInferior = datosOrdenados[cantidadDatos / 2 - 1];

        return (medioSuperior.num + medioInferior.num) / 2;
    } else {
        // Si hay un número impar de datos, devolver el valor central
        const indiceCentral = Math.floor(cantidadDatos / 2);
        return datosOrdenados[indiceCentral].num;
    }

}
