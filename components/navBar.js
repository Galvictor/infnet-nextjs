import Link from "next/link";

export default function NavBar({onLogout}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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
                            <Link className="nav-link" href="/products">
                                Produtos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/perfil">
                                Perfil
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/contact">
                                Contato
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/about">
                                Sobre
                            </Link>
                        </li>
                    </ul>
                    <button className="btn btn-danger" onClick={onLogout}>
                        Sair
                    </button>
                </div>
            </div>
        </nav>

    )
}
