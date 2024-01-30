import { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
  Tooltip,
} from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { ResultadoFrecuencias } from "@/pages/Calc";

export default function FrecuenciaTabla({ idseccion, tituloCal }) {
  const [datos, setDatos] = useState(new Map());
  const [numero, setNumero] = useState("1");

  const agregarFrecuencia = (numero) => {
    if (!isNaN(numero) && numero.trim() !== "") {
      setDatos((prevDatos) => {
        const newDatos = new Map(prevDatos);
        newDatos.set(numero, (newDatos.get(numero) || 0) + 1);
        return newDatos;
      });
      setNumero("");
    } else {
      alert("Dato no válido");
    }
  };

  const resetearDatos = () => {
    setDatos(new Map());
  };

  const [mostrarResultados, setMostrarResultados] = useState(false);
  const handlerResultados = () => setMostrarResultados(!mostrarResultados);

  return (
    <Card className="w-auto border-4 border-purple-900">
      {mostrarResultados && datos.size > 0 && (
        <ResultadoFrecuencias
          openT={mostrarResultados}
          handleOpen={handlerResultados}
          datos={Array.from(datos.entries())}
          id={idseccion}
          titulo={tituloCal}
        />
      )}

      <Typography variant="h3" color="black" className="mx-auto text-center">
        {tituloCal}
      </Typography>
      <CardBody className="flex flex-col gap-4">
        <div className="flex space-x-4 items-center">
          <Input
            label="Dato"
            type="number"
            size="lg"
            color="purple"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
          <div className="flex justify-center space-x-4">
            <Button color="pink" onClick={() => agregarFrecuencia(numero)}>
              Agregar
            </Button>
            <Button color="orange" onClick={resetearDatos}>
              Resetear
            </Button>
          </div>
        </div>

        {datos.size === 0 ? (
          <Typography
            variant="h5"
            color="blue-gray"
            className="mx-auto text-center"
          >
            La tabla de frecuencias está vacía
          </Typography>
        ) : (
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="text-center">Dato</th>
                  <th className="text-center">Frecuencia</th>
                </tr>
              </thead>
              <tbody>
                {Array.from(datos.entries()).map(([num, freq], index) => (
                  <tr key={index}>
                    <td className="text-center">{num}</td>
                    <td className="text-center">{freq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          variant="gradient"
          fullWidth
          color="purple"
          onClick={handlerResultados}
        >
          Mostrar Resultados Avanzado
        </Button>
      </CardFooter>
    </Card>
  );
}
