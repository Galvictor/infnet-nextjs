import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../styles/global.css';
import "../styles/products.css";
import Head from 'next/head';
import {useEffect} from "react";
import {AuthProvider} from "@/contexts/authContext";

export default function MyApp({Component, pageProps}) {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js'); // Importa dinamicamente
    }, []);
    return (
        <AuthProvider>
            <Head>
                <title>Meu Site</title>
                <meta name="description" content="Descrição padrão do meu site"/>
            </Head>
            <Component {...pageProps} />
        </AuthProvider>
    );
}
