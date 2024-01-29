import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  PencilIcon,
  UserPlusIcon,
  PlusIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
  Collapse,
} from "@material-tailwind/react";
import { Dialog_Error, Loader, Notification } from "@/widgets"; //Importar el componente
import { tasks } from "../../Data/Conceptos";
<<<<<<< Updated upstream

=======
import {
  Calc_tendria_central,
  Calc_Bernoulli,
  Calc_Poisson,
  Calc_Binomial,
  Calc_Normal,
  Calc_Bayes,
  Frecuencia
} from "@/pages/Calc";
>>>>>>> Stashed changes
//const TABLE_HEAD = ["Member", "Function", "Status", "Employed", ""];
import { useEffect, useState } from "react";
export default function Conceptos({ id_seccion }) {
  const [concepto, setConcepto] = useState({ definiciones: [] });
  const [load, setLoader] = useState(false);
  //Conceptos
  useEffect(() => {
    ObtenerPreguntas();
  }, []);

  // Función para obtener los datos de manera asíncrona
  const ObtenerPreguntas = async () => {
    setLoader(true);
    try {
      // Filtrar los datos con id === 0 y extraer título y concepto
      const conceptoConIdCero = await tasks.find(
        (task) => task.id === id_seccion
      );
      // Establecer el estado con el concepto encontrado
      setConcepto(conceptoConIdCero || {});
      setLoader(false);
    } catch (error) {
      console.error("Error al obtener las preguntas:", error);
      setLoader(false);
    }
  };

  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  const [openRecursos, setOpenRecursos] = useState(false);
  const toggleOpenRecursos = () => setOpenRecursos((cur) => !cur);

<<<<<<< Updated upstream
=======
  //HACER UN SWITCH PARA RENDERIZAR UN COMPONENTE DE CALCULADORA DEPENDIENDO DEL ID QUE RECIBE ESTE COMPONENTE
  //calc_tendria_central
  const renderComponent = () => {
    switch (id_seccion) {
      case 0:
        return (
          <Calc_tendria_central
            idseccion={id_seccion}
            tituloCal={concepto.title}
          />
        );
      //Calc_Bernoulli
      case 1:
        return (
          <Calc_Bernoulli idseccion={id_seccion} tituloCal={concepto.title} />
        );
      //Calc_Poisson
      case 2:
        return (
          <Calc_Poisson idseccion={id_seccion} tituloCal={concepto.title} />
        );
        case 3:
        return (
          <Calc_Binomial idseccion={id_seccion} tituloCal={concepto.title} />
        );
        case 4:
        return (
          <Calc_Normal idseccion={id_seccion} tituloCal={concepto.title} />
        );
        case 5:
        return (
          <Calc_Bayes idseccion={id_seccion} tituloCal={concepto.title} />
        );
        case 6:
        return (
          <Frecuencia idseccion={id_seccion} tituloCal={concepto.title} />
        );
      default:
        return null; // Otra opción por defecto si ninguna condición es verdadera
    }
  };
>>>>>>> Stashed changes
  return (
    <Card className="h-full w-full mt-7">
      <>
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none mb-0"
        >
          <div className=" flex items-center justify-between gap-8">
            <div className="text-center mx-auto">
              <Typography
                variant="h3"
                color="deep-purple"
                className="font-bold"
              >
                {concepto.title}
              </Typography>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll mt-0">
          {/* TEORIA */}
          <Button
            onClick={toggleOpen}
            variant="outlined"
            color="deep-purple"
            className="w-full"
          >
            Teoria
          </Button>
          <Collapse open={open}>
            <Card className="my-4 mx-auto w-full">
              <CardBody>
                {concepto.description}
                {/*      {concepto.definiciones && ( */}
                <div className="p-6">
                  {concepto.definiciones &&
                    concepto.definiciones.length !== 0 &&
                    concepto.definiciones.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <Typography variant="lead" color="deep-purple">
                          {item.tipo}
                        </Typography>
                        <li>{item.definition}</li>
                      </div>
                    ))}
                </div>

                {concepto.description2}
                {/* 
              {concepto.description}
              <div className="p-6">
                <Typography variant="lead" color="deep-purple">
                  Media
                </Typography>
                <li>{concepto.media?.definition}</li>
                <Typography variant="lead" color="deep-purple">
                  Mediana
                </Typography>
                <li>{concepto.mediana?.definition}</li>
                <Typography variant="lead" color="deep-purple">
                  Moda
                </Typography>
                <li>{concepto.moda?.definition}</li>
              </div>
              {concepto.description2}
              */}
              </CardBody>
            </Card>
          </Collapse>
          {/*ENLACES EXTERNOS*/}
          <Button
            onClick={toggleOpenRecursos}
            variant="outlined"
            color="deep-purple"
            className="w-full mt-3"
          >
            Recursos
          </Button>
          <Collapse open={openRecursos}>
            <Card className="my-4 mx-auto w-full">
              <CardBody>AQUI CARGAN LOS RECURSOS</CardBody>
            </Card>
          </Collapse>
        </CardBody>
      </>

      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Pagina 1 de 6
        </Typography>
        <div className="flex gap-2">
          <Button variant="gradient" size="sm" color="deep-purple">
            Anterior
          </Button>
          <Button variant="gradient" size="sm" color="deep-purple">
            Siguiente
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
