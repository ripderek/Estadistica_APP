//Este es un nuevo archivo que no se habia usado en el proyecto anterior sirve como un rotueador parecedio a nodejs 

import {
    HomeIcon,
    UserCircleIcon,
    TableCellsIcon,
    InformationCircleIcon,
    ServerStackIcon,
    RectangleStackIcon,
    ChartBarSquareIcon

} from "@heroicons/react/24/solid";
//Importa todos los componentes que tiene la carpta MenuLateral mediante el index.js
//import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";

//aqui es para particionar la barra en otra seccion
//import { SignIn, SignUp } from "@/pages/auth";

const icon = {
    className: "w-5 h-5 text-inherit",
};

export const routes = [
    {
        layout: "dashboard",
        pages: [
            {
                icon: <ChartBarSquareIcon {...icon} />,
                name: "Tendencia central",
                path: "/Tendencia_central",
                //element: <Home />,
            },
            {
                icon: <ChartBarSquareIcon {...icon} />,
                name: "Distribucion de Bernoulli",
                path: "/Distribucion_de_Bernoulli",
                //element: <Profile />,
            },
            {
                icon: <ChartBarSquareIcon {...icon} />,
                name: "Distribucion de Poisson",
                path: "/Distribucion_de_Poisson",
                //element: <Tables />,
            },
            {
                icon: <ChartBarSquareIcon {...icon} />,
                name: "Distribucion Binomial",
                path: "/Distribucion_Binomial",
                //element: <Notifications />,
            },
            {
                icon: <ChartBarSquareIcon {...icon} />,
                name: "Distribucion Normal",
                path: "/Distribucion_Normal",
                //element: <Notifications />,
            },
            {
                icon: <ChartBarSquareIcon {...icon} />,
                name: "Teorema de Bayes",
                path: "/Teorema_de_Bayes",
                //element: <Notifications />,
            },
        ],
    },
    /*
    {
        title: "Opciones Usuario",
        layout: "auth",
        pages: [
            {
                icon: <InformationCircleIcon {...icon} />,
                name: "Mis datos",
                path: "/notifications",
                //element: <Notifications />,
            },
            {
                icon: <InformationCircleIcon {...icon} />,
                name: "Mis reportes",
                path: "/notifications",
                //element: <Notifications />,
            },
        ],
    },
    {
        title: "Opciones de Super Usuario",
        layout: "superuser",
        pages: [
            {
                icon: <InformationCircleIcon {...icon} />,
                name: "Usuarios",
                path: "/notifications",
                //element: <Notifications />,
            },
            {
                icon: <InformationCircleIcon {...icon} />,
                name: "Formularios",
                path: "/notifications",
                //element: <Notifications />,
            },
        ],
    },
    */
];

export default routes;
