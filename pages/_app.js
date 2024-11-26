import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import Head from 'next/head';
import {useEffect} from "react";

export default function MyApp({Component, pageProps}) {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js'); // Importa dinamicamente
    }, []);
    return (
        <>
            <Head>
                <title>Meu Site</title>
                <meta name="description" content="Descrição padrão do meu site"/>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
