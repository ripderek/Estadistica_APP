import React from 'react'
import { NavBarFormsLogin } from '@/components/FormsLayout'
import { Cards } from '@/pages/dashboard'
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Cookies from "universal-cookie";
import { useRouter } from 'next/router';

export default function InicioSesion() {
    const Router = useRouter();

    //funcion para el inicio de sesion skere modo diablo
    const loginG = useGoogleLogin({
        onSuccess: async (respose) => {
            try {
                const res = await axios.get(
                    "https://www.googleapis.com/oauth2/v3/userinfo",
                    {
                        headers: {
                            Authorization: `Bearer ${respose.access_token}`,
                        },
                    }
                );

                //console.log(res.data);
                //Aqui va para sacar los datos que regresa google
                //si existe res.data entonces mandar a la API a verificar 
                if (res.data) {
                    console.log(res.data);
                    const { email: email, family_name: apellidos, given_name: nombres, hd: dominio, name: nombres_completos, picture: foto } = res.data;
                    //Llama al metodo pasandole el email
                    //GoogleLogin(email, nombres_completos, dominio, foto);
                    const cookies = new Cookies();
                    cookies.set("Nombres", nombres_completos, { path: "/" });
                    cookies.set("foto", foto, { path: "/" });
                    cookies.set("email", email, { path: "/" });
                }
                Router.push("/Inicio");
            } catch (error) {
                console.log(error);
            }
        },
    });
    return (
        <>
            <NavBarFormsLogin loginG={loginG} />

            <Cards loginG={loginG} />

        </>
    )
}
