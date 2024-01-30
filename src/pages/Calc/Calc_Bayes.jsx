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

export default function Calc_Normal({ idseccion, tituloCal }) {
  //funcion para agrgar los datos skere modo diablo
  const [numero, SetNumero] = useState(0);
  const [numero2, SetNumero2] = useState(0);
  const [numero3, SetNumero3] = useState(0);

  // Función para agregar un nuevo dato al estado

  //funcion para abrir un dialog con los resultados dependiendo del id seccion y del conjunto de datos
  const [mostrarResultados, setMostraResultados] = useState(false);
  const handlerResultados = () => setMostraResultados(!mostrarResultados);
  return (
    <Card className="w-auto border-4 border-purple-900">
      {mostrarResultados && (
        <Result_Binomial
          openT={mostrarResultados}
          handleOpen={handlerResultados}
          id={idseccion}
          titulo={tituloCal}
          probA={numero}
          probAB={numero2}
          probB={numero3}
        />
      )}

      <Typography variant="h3" color="black" className="mx-auto text-center">
        Calculadora de {tituloCal}
      </Typography>
      <CardBody className="flex flex-col gap-4">
        <div className="flex space-x-4 items-center">
          <Input
            label="Probabilidad de A (P(A)):"
            type="number"
            size="lg"
            color="purple"
            id="numeroingresado2"
            value={numero}
            onChange={(e) => SetNumero(e.target.value)}
          />
          <Input
            label="Probabilidad de B dado A (P(B|A)):"
            type="number"
            size="lg"
            color="purple"
            id="numeroingresado"
            value={numero2}
            onChange={(e) => SetNumero2(e.target.value)}
          />
          <Input
            label="Probabilidad de B (P(B)):"
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
