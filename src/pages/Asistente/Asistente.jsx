import { useState, useEffect, useRef } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Stepper,
  Step,
  Tooltip,
} from "@material-tailwind/react";
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import { tasks } from "../../Data/Asistente";

export default function Asistente({ cerrar, id_seccion1 }) {
  //Estados para los pasos
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  //almacenar el paso actual, por defecto es = 1
  const [pasoClick, setPasoClick] = useState(1);

  //OBTENER LOS PAOS DESDE EL ARCHIVO JS CON LOS PASOS CON EL MISMO ID
  const [concepto, setConcepto] = useState({
    pasos: [],
  });
  const [load, setLoader] = useState(false);
  //Conceptos
  useEffect(() => {
    ObtenerPreguntas();
  }, []);

  // Función para obtener los datos de manera asíncrona
  const ObtenerPreguntas = async () => {
    setLoader(true);
    try {
      // Filtrar los datos con id === 0 y extraer título y
      //concepto
      const conceptoConIdCero = await tasks.find(
        (task) => task.id === id_seccion1
      );
      // Establecer el estado con el concepto encontrado
      setConcepto(conceptoConIdCero || {});
      setLoader(false);
      //ObtenerContenidoPaso(1);

      const conceptoConIdCero1 = await conceptoConIdCero.pasos.find(
        (task) => task.paso === 1
      );
      // Establecer el estado con el concepto encontrado
      setContenido(conceptoConIdCero1 || {});
    } catch (error) {
      console.error("Error al obtener las preguntas:", error);
      setLoader(false);
    }
  };
  //Obtener contenido del paso seleccionado
  const [contendido, setContenido] = useState([]);
  const ObtenerContenidoPaso = async (num_paso) => {
    setLoader(true);
    try {
      // Filtrar los datos con id === 0 y extraer título y
      //concepto
      const conceptoConIdCero = await concepto.pasos.find(
        (task) => task.paso === num_paso
      );
      // Establecer el estado con el concepto encontrado
      setContenido(conceptoConIdCero || {});
      setLoader(false);
    } catch (error) {
      console.error("Error al obtener el contenido:", error);
      setLoader(false);
    }
  };
  return (
    <>
      <Dialog
        open={true}
        handler={cerrar}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>
          {" "}
          <Typography variant="h3" color="deep-purple" className="font-bold">
            {concepto.title}
          </Typography>
          <Button
            color="red"
            variant="text"
            size="md"
            className="!absolute top-3 right-3"
            onClick={cerrar}
          >
            <Typography variant="h5" color="blue-gray">
              X
            </Typography>
          </Button>
        </DialogHeader>
        <DialogBody>
          <Typography variant="h5" color="black" className="font-bold">
            {contendido.titulo}
          </Typography>
          {contendido.definition}
          <img
            src={contendido.miniatura}
            alt=""
            className="h-64 mx-auto mt-4"
          />
        </DialogBody>

        <DialogFooter>
          <div className="w-full px-24 py-4">
            {/* RECORRER LOS PASOS DEL MAP */}
            <Stepper
              activeStep={activeStep}
              isLastStep={(value) => setIsLastStep(value)}
              isFirstStep={(value) => setIsFirstStep(value)}
            >
              {concepto.pasos &&
                concepto.pasos.length !== 0 &&
                concepto.pasos.map((item, itemIndex) => (
                  <Step
                    onClick={() => (
                      setActiveStep(item.paso - 1),
                      ObtenerContenidoPaso(item.paso)
                    )}
                    className="cursor-pointer"
                  >
                    <Typography
                      variant="h6"
                      color={activeStep === item.paso ? "white" : "gray"}
                    >
                      {item.paso}
                    </Typography>
                  </Step>
                ))}
            </Stepper>
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
}
