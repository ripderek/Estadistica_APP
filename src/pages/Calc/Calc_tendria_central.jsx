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
import { Resultados } from "@/pages/Calc";
export default function Calc_tendria_central({ idseccion, tituloCal }) {
  //funcion para agrgar los datos skere modo diablo
  const [datos, setDatos] = useState([]);
  const [numero, SetNumero] = useState(0);
  // Función para agregar un nuevo dato al estado
  const agregarDato = (numero1) => {
    //el datos.lenght es para el id , el numero es el dato xdxd pinche Maholy
    if (!isNaN(numero1) && numero1.trim() !== "") {
      // Agregar el dato al estado solo si 'numero1' es un número y no está vacío
      setDatos([...datos, { id: datos.length, num: parseFloat(numero1) }]);
      console.log(datos);
    } else {
      // Mostrar un mensaje de error o tomar alguna acción en caso de que 'numero1' no sea válido
      alert("Número no válido");
    }
  };
  //funcion para eliminar filas del json
  const eliminarDato = (id) => {
    // Filtrar los datos para excluir el elemento con el id proporcionado
    const nuevosDatos = datos.filter((dato) => dato.id !== id);
    // Actualizar el estado con los nuevos datos
    setDatos(nuevosDatos);
  };
  //funcion para abrir un dialog con los resultados dependiendo del id seccion y del conjunto de datos
  const [mostrarResultados, setMostraResultados] = useState(false);
  const handlerResultados = () => setMostraResultados(!mostrarResultados);
  return (
    <Card className="w-auto border-4 border-purple-900">
      {mostrarResultados && datos.length > 2 && (
        <Resultados
          openT={mostrarResultados}
          handleOpen={handlerResultados}
          datos={datos}
          id={idseccion}
          titulo={tituloCal}
        />
      )}

      <Typography variant="h3" color="black" className="mx-auto text-center">
        Calculadora de {tituloCal}
      </Typography>
      <CardBody className="flex flex-col gap-4">
        <div className="flex space-x-4 items-center">
          <Input
            label="Dato"
            type="number"
            size="lg"
            color="purple"
            id="numeroingresado"
            value={numero}
            onChange={(e) => SetNumero(e.target.value)}
          />
          <Button
            color="pink"
            onClick={() =>
              agregarDato(document.getElementById("numeroingresado").value)
            }
          >
            Agregar
          </Button>
        </div>
        {/* Div para ver los datos ingresados y poder eliminarnlos xd skere modo diablo*/}
        <div>
          {datos.length === 0 ? (
            <Typography
              variant="h5"
              color="blue-gray"
              className="mx-auto text-center"
            >
              El conjunto de datos esta vacio
            </Typography>
          ) : (
            ""
          )}
          <div className="grid grid-cols-6 md:grid-cols-9 gap-1 p-2">
            {datos.map(({ id, num }) => (
              <div
                key={id}
                className="bg-pink-50 rounded-2xl hover:shadow-purple-900 shadow-2xl"
              >
                <div className="mx-auto">
                  <div className=" p-4">
                    <input
                      value={num}
                      className="w-full text-purple-900 font-bold"
                      disabled
                    />
                    {/*
                        <input
                          className="w-full text-lg bg-blue-gray-50 font-semibold	text-blue-gray-800 "
                          disabled
                        />
                         */}
                  </div>
                  {/* 
                    <div className="w-auto flex ml-2 mb-2">
                      <Chip
                        variant="gradient"
                        size="sm"
                        color="green"
                        value="Nuevo"
                        className="shadow-xl shadow-purple-800"
                      />
                    </div>
*/}
                  <div className="p-2 flex justify-end">
                    <Tooltip content="Eliminar">
                      <button
                        className="bg-zinc-50 p-2 bg-red-600 rounded-xl cursor-pointer"
                        onClick={() => eliminarDato(id)}
                      >
                        <TrashIcon className="w-4" color="white" />
                      </button>
                    </Tooltip>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
