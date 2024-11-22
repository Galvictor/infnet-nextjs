import '../styles/global.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Meu Site</title>
                <meta name="description" content="Descrição padrão do meu site" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
