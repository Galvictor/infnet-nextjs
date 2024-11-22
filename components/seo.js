import Head from 'next/head';

export default function SEO({ title, description }) {
    const siteName = "Meu Site"; // Nome do site para o padrão.

    return (
        <Head>
            <title>{title ? `${title} - ${siteName}` : siteName}</title>
            <meta name="description" content={description || "Descrição padrão do site"} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* Meta tags adicionais para SEO */}
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="robots" content="index, follow" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
