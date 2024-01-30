import { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer  } from "recharts";

export default function ResultadoFrecuencias({
  openT,
  handleOpen,
  datos,
  id,
  titulo
}) {
  const [tablaFrecuencias, setTablaFrecuencias] = useState([]);
  const [histogramData, setHistogramData] = useState([]);

  useEffect(() => {
    calcularFrecuencias(datos);
  }, [datos]);

  const calcularFrecuencias = (datos) => {
    // Sumar las frecuencias para obtener totalDatos
    let totalDatos = datos.reduce((suma, [, freq]) => suma + freq, 0);
    let frecuenciaAbsolutaAcum = 0;
    let frecuenciaRelativaAcum = 0;
  
    // Crear tabla de frecuencias
    const tabla = datos.map(([dato, freqAbs]) => {
      let freqRel = freqAbs / totalDatos;
      frecuenciaAbsolutaAcum += freqAbs;
      frecuenciaRelativaAcum += freqRel;
      return {
        dato,
        freqAbs,
        freqAbsAcum: frecuenciaAbsolutaAcum,
        freqRel: freqRel.toFixed(2),
        freqRelAcum:frecuenciaRelativaAcum.toFixed(2),
      };
      
    });
    setTablaFrecuencias(tabla);
    setHistogramData(tabla.map(({ dato, freqAbs }) => ({ name: dato, value: freqAbs })));
  };
  const copiarTabla = () => {
    let textoTabla = "Dato\tFrecuencia Absoluta\tFrecuencia Absoluta Acumulada\tFrecuencia Relativa\tFrecuencia Relativa Acumulada\n";
    tablaFrecuencias.forEach(({ dato, freqAbs, freqAbsAcum, freqRel, freqRelAcum }) => {
      textoTabla += `${dato}\t${freqAbs}\t${freqAbsAcum}\t${freqRel}\t${freqRelAcum}\n`;
    });
    navigator.clipboard.writeText(textoTabla)
      .then(() => alert("Tabla copiada al portapapeles"))
      .catch(err => console.error("Error al copiar la tabla: ", err));
  };
  

  return (
    <Dialog open={openT} handler={handleOpen} className="max-w-lg w-full">
      <DialogHeader>Resultados de {titulo}</DialogHeader>
      <DialogBody className="text-center mx-auto">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th>Dato</th>
              <th>Frecuencia Absoluta</th>
              <th>Frecuencia Absoluta Acumulada</th>
              <th>Frecuencia Relativa</th>
              <th>Frecuencia Relativa Acumulada</th>
            </tr>
          </thead>

<tbody>
  {tablaFrecuencias.map(({ dato, freqAbs, freqAbsAcum, freqRel, freqRelAcum }) => (
    <tr key={dato}>
      <td>{dato}</td>
      <td>{freqAbs}</td>
      <td>{freqAbsAcum}</td>
      <td>{freqRel}</td>
      <td>{freqRelAcum}</td>
    </tr>
  ))}
  <tr>
    <td>Total</td>
    <td>
      {tablaFrecuencias.reduce((total, { freqAbs }) => total + freqAbs, 0)}
    </td>
    <td></td> {/* Deja este espacio en blanco */}
    <td></td> {/* Deja este espacio en blanco */}
    <td></td> {/* Deja este espacio en blanco */}
  </tr>
</tbody>
        </table>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={histogramData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </DialogBody>
      <DialogFooter>
        <Button variant="gradient" color="green" onClick={copiarTabla}>
          Copiar Tabla
        </Button>
        <div className="mx-2"> {/* Espaciador entre los botones */}
    {/* Este div actúa como un espaciador */}
  </div>
        <Button variant="gradient" color="purple" onClick={handleOpen}>
          Cerrar
        </Button>
      </DialogFooter>
    </Dialog>
    
    );
}
