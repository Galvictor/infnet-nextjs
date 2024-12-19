'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../styles/global.css';
import "../styles/products.css";
import {useEffect} from "react";

export default function RootLayout({children}) {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js'); // Importa dinamicamente
    }, []);
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}