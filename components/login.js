import {useState} from "react";

const Login = ({onLogin}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    username,
                    password,
                    expiresInMins: 30,
                }),
            });

            if (!response.ok) {
                throw new Error("Credenciais inválidas");
            }

            const data = await response.json();
            localStorage.setItem("accessToken", data.accessToken); // Salva o token
            onLogin(data); // Passa as informações do usuário para o Layout
        } catch (err) {
            setError(err.message || "Erro ao fazer login.");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow" style={{width: "400px"}}>
                <h3 className="text-center mb-4">Login</h3>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Nome de Usuário
                        </label>
                        <small>emilys</small>
                        <input
                            type="text"
                            id="username"
                            className="form-control"
                            placeholder="Digite seu nome de usuário"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Senha
                        </label>
                        <small>emilyspass</small>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
