import React from "react";
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
} from "@material-tailwind/react";

const TABS = [
  {
    label: "Todo",
    value: "Todo",
  },
  {
    label: "Admin",
    value: "Admin",
  },
  {
    label: "Miembro",
    value: "Miembro",
  },
];
import Lottie from "lottie-react";
import anim from "../../../public/anim/tendenciaCentral.json";
import anim1 from "../../../public/anim/DistribucionBernoulli.json";
import anim2 from "../../../public/anim/Distribucion_de_Poisson.json";
import anim3 from "../../../public/anim/Animation_1704523153976.json";

//Animation_1704523153976.json
export default function Cards({ loginG }) {
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h2" color="deep-purple">
              Calculadoras disponibles
            </Typography>
            {/* 
            <Typography color="gray" className="mt-1 font-normal">
              Secciones a las que pertenece
            </Typography>
            */}
          </div>
          {/*
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
             
        <Button variant="outlined" size="sm">
          Todo
        </Button>
        <Button className="flex items-center gap-3" size="sm" color="green">
              <PlusIcon strokeWidth={2} className="h-4 w-4" /> Crear Seccion
            </Button>
        
          </div>
          */}
        </div>
        {/*
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Buscar"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
 */}
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-5">
          {/*Primer card */}
          <div
            className="bg-pink-50  rounded-2xl hover:shadow-purple-900 shadow-2xl"
            onClick={loginG}
          >
            <div className="bg-zinc-900 text-black  rounded-2xl cursor-pointer ">
              <div className="mx-auto">
                <div className="text-center">
                  <Lottie animationData={anim} className="h-52" />
                </div>
                <div className="w-full p-4">
                  <Typography variant="h4" color="deep-purple">
                    Tendencia Central
                  </Typography>
                  {/*
                  <input
                    className="w-full text-lg bg-blue-gray-50 font-semibold	text-blue-gray-800 "
                    disabled
                  />
                   */}
                </div>
                <div className="w-auto flex ml-2 mb-2">
                  <Chip
                    variant="gradient"
                    size="sm"
                    color="green"
                    value="Nuevo"
                    className="shadow-xl shadow-purple-800"
                  />
                </div>

                <div className="p-2 flex justify-end">
                  {/* 
                  <Tooltip content="Ir a la seccion">
                    <button className="bg-zinc-50 p-2 bg-green-700 rounded-xl cursor-pointer">
                      <ArrowRightCircleIcon className="w-7" color="white" />
                    </button>
                  </Tooltip>
                  */}
                </div>
              </div>
            </div>
          </div>
          {/*Second card */}
          <div
            className="bg-pink-50 rounded-2xl hover:shadow-purple-900 shadow-2xl"
            onClick={loginG}
          >
            <div className="bg-zinc-900 text-black  rounded-2xl cursor-pointer ">
              <div className="mx-auto">
                <div className="text-center">
                  <Lottie animationData={anim1} className="h-52" />
                </div>
                <div className="w-full p-4">
                  <Typography variant="h4" color="deep-purple">
                    Distribucion de Bernoulli
                  </Typography>
                  {/*
                  <input
                    className="w-full text-lg bg-blue-gray-50 font-semibold	text-blue-gray-800 "
                    disabled
                  />
                   */}
                </div>
                <div className="w-auto flex ml-2 mb-2">
                  <Chip
                    variant="gradient"
                    size="sm"
                    color="green"
                    value="Nuevo"
                    className="shadow-xl shadow-purple-800"
                  />
                </div>

                <div className="p-2 flex justify-end">
                  {/* 
                  <Tooltip content="Ir a la seccion">
                    <button className="bg-zinc-50 p-2 bg-green-700 rounded-xl cursor-pointer">
                      <ArrowRightCircleIcon className="w-7" color="white" />
                    </button>
                  </Tooltip>
                  */}
                </div>
              </div>
            </div>
          </div>
          {/*Tercer card */}
          <div
            className="bg-pink-50  rounded-2xl hover:shadow-purple-900 shadow-2xl"
            onClick={loginG}
          >
            <div className="bg-zinc-900 text-black  rounded-2xl cursor-pointer ">
              <div className="mx-auto">
                <div className="text-center">
                  <Lottie animationData={anim3} className="h-52" />
                </div>
                <div className="w-full p-4">
                  <Typography variant="h4" color="deep-purple">
                    Distribucion de Poisson
                  </Typography>
                  {/*
                  <input
                    className="w-full text-lg bg-blue-gray-50 font-semibold	text-blue-gray-800 "
                    disabled
                  />
                   */}
                </div>
                <div className="w-auto flex ml-2 mb-2">
                  <Chip
                    variant="gradient"
                    size="sm"
                    color="green"
                    value="Nuevo"
                    className="shadow-xl shadow-purple-800"
                  />
                </div>

                <div className="p-2 flex justify-end">
                  {/* 
                  <Tooltip content="Ir a la seccion">
                    <button className="bg-zinc-50 p-2 bg-green-700 rounded-xl cursor-pointer">
                      <ArrowRightCircleIcon className="w-7" color="white" />
                    </button>
                  </Tooltip>
                  */}
                </div>
              </div>
            </div>
          </div>
          {/*Cuarta card */}
          <div
            className="bg-pink-50  rounded-2xl hover:shadow-purple-900 shadow-2xl"
            onClick={loginG}
          >
            <div className="bg-zinc-900 text-black  rounded-2xl cursor-pointer ">
              <div className="mx-auto">
                <div className="text-center">
                  <Lottie animationData={anim2} className="h-52" />
                </div>
                <div className="w-full p-4">
                  <Typography variant="h4" color="deep-purple">
                    Distribucion Binomial
                  </Typography>
                  {/*
                  <input
                    className="w-full text-lg bg-blue-gray-50 font-semibold	text-blue-gray-800 "
                    disabled
                  />
                   */}
                </div>
                <div className="w-auto flex ml-2 mb-2">
                  <Chip
                    variant="gradient"
                    size="sm"
                    color="green"
                    value="Nuevo"
                    className="shadow-xl shadow-purple-800"
                  />
                </div>

                <div className="p-2 flex justify-end">
                  {/* 
                  <Tooltip content="Ir a la seccion">
                    <button className="bg-zinc-50 p-2 bg-green-700 rounded-xl cursor-pointer">
                      <ArrowRightCircleIcon className="w-7" color="white" />
                    </button>
                  </Tooltip>
                  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
      {/* 
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Pagina 1 de 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Anterior
          </Button>
          <Button variant="outlined" size="sm">
            Siguiente
          </Button>
        </div>
      </CardFooter>
      */}
    </Card>
  );
}
