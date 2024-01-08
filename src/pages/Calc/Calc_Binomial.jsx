import React from "react";

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
import { Result_Binomial } from "@/pages/Calc";

export default function Calc_Binomial({ idseccion, tituloCal }) {
  //funcion para agrgar los datos skere modo diablo
  const [numero, SetNumero] = useState(0);
  const [numero2, SetNumero2] = useState(0);
  const [numero3, SetNumero3] = useState(0);

  // Función para agregar un nuevo dato al estado

  //funcion para abrir un dialog con los resultados dependiendo del id seccion y del conjunto de datos
  const [mostrarResultados, setMostraResultados] = useState(false);
  const handlerResultados = () => {
    // Verificar si alguno de los números es negativo
    if (numero < 0 || numero2 < 0 || numero3 < 0) {
      alert("Por favor, ingrese valores no negativos");
      return; // Detener la ejecución si algún número es negativo
    }
  
    // Verificar si el número está en el rango para la probabilidad
    if (numero2 >= 0 && numero2 <= 1) {
      setMostraResultados(!mostrarResultados);
    } else {
      alert("Probabilidad fuera de rango (entre 0 y 1)");
    }
  };
  
  return (
    <Card className="w-auto border-4 border-purple-900">
      {mostrarResultados && (
        <Result_Binomial
          openT={mostrarResultados}
          handleOpen={handlerResultados}
          id={idseccion}
          titulo={tituloCal}
          numeroEnasayo={numero}
          probabilidad={numero2}
          numeroExito={numero3}
        />
      )}

      <Typography variant="h3" color="black" className="mx-auto text-center">
        Calculadora de {tituloCal}
      </Typography>
      <CardBody className="flex flex-col gap-4">
        <div className="flex space-x-4 items-center">
          <Input
            label="Número de ensayos:"
            type="number"
            size="lg"
            color="purple"
            id="numeroingresado2"
            value={numero}
            onChange={(e) => SetNumero(e.target.value)}
          />
          <Input
            label="Probabilidad de éxito:"
            type="number"
            size="lg"
            color="purple"
            id="numeroingresado"
            value={numero2}
            onChange={(e) => SetNumero2(e.target.value)}
          />
          <Input
            label="Número de éxitos:"
            type="number"
            size="lg"
            color="purple"
            id="numeroingresado"
            value={numero3}
            onChange={(e) => SetNumero3(e.target.value)}
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
