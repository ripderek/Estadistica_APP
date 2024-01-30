import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
  Chip,
  Tooltip,
} from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Result_Poisson } from "@/pages/Calc";

export default function Calc_Poisson({ idseccion, tituloCal }) {
  //funcion para agrgar los datos skere modo diablo
  const [numero, SetNumero] = useState(0);
  const [numero2, SetNumero2] = useState(0);

  // Función para agregar un nuevo dato al estado

  //funcion para abrir un dialog con los resultados dependiendo del id seccion y del conjunto de datos
  const [mostrarResultados, setMostraResultados] = useState(false);
  const handlerResultados = () => {
    //verificar si el numero no esta en el rango
    setMostraResultados(!mostrarResultados);
    //else alert("P: probabilidad fuera de rango");
  };
  return (
    <Card className="w-auto border-4 border-purple-900">
      {mostrarResultados && (
        <Result_Poisson
          openT={mostrarResultados}
          handleOpen={handlerResultados}
          id={idseccion}
          titulo={tituloCal}
          numeroEventos={numero2}
          tasaMedia={numero}
        />
      )}

      <Typography variant="h3" color="black" className="mx-auto text-center">
        Calculadora de {tituloCal}
      </Typography>
      <CardBody className="flex flex-col gap-4">
        <div className="flex space-x-4 items-center">
          <Input
            label="Tasa Media"
            type="number"
            size="lg"
            color="purple"
            id="numeroingresado2"
            value={numero}
            onChange={(e) => SetNumero(e.target.value)}
          />
          <Input
            label="Numero de eventos:"
            type="number"
            size="lg"
            color="purple"
            id="numeroingresado"
            value={numero2}
            onChange={(e) => SetNumero2(e.target.value)}
          />
          {/* 
          <Button
            color="pink"
            onClick={() =>
              agregarDato(document.getElementById("numeroingresado").value)
            }
          >
            Agregar
          </Button>
          */}
        </div>
        {/* Div para ver los datos ingresados y poder eliminarnlos xd skere modo diablo*/}
        <div></div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          variant="gradient"
          fullWidth
          color="purple"
          onClick={handlerResultados}
        >
          Calcular
        </Button>
      </CardFooter>
    </Card>
  );
}
