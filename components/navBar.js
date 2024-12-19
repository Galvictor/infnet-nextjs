'use client';
import Link from "next/link";
import {router} from "next/client";
import {auth} from "@/libs/firebaseClient";

export default function NavBar() {

    const onLogout = () => {
        auth.signOut();
        router.push("/login");
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" href="/">
                        MinhaLogo
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" href="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/users">
                                    Usuários
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/users/perfil">
                                    Perfil
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Produtos Pages
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" href="/products">
                                            (Produtos getStaticProps)
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="/products/SSP">
                                            (Produtos getServerSideProps)
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="/products-isr">
                                            (Produtos Cache ISR)
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="/products-ssg">
                                            (Produtos Cache SSG)
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="/products-ssr">
                                            (Produtos Cache SSR)
                                        </Link>
                                    </li>

                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/contact">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                        <button className="btn btn-danger" onClick={onLogout}>
                            Sair
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}
