import {useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {useState} from "react";
import {registerUser} from "@/libs/firebaseClient";

export default function Register() {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // Monitora o valor do campo de senha
    const password = watch("password");

    const onSubmit = async (data) => {
        setLoading(true);
        setErrorMessage("");

        try {
            // Cria o usuário no Firebase Authentication
            const res = await registerUser(data.email, data.password, data.name, "user", data.cpf);

            if (!res.success) {
                setErrorMessage(res.message);
            } else {
                console.log("Usuário registrado com sucesso!", res);
                await router.push("/");
            }

        } catch (error) {
            console.log("Erro ao registrar:", error);
            setErrorMessage("Falha ao registrar o usuário: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow p-4" style={{width: "100%", maxWidth: "400px"}}>
                <h2 className="text-center mb-4">Registrar</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nome</label>
                        <input
                            id="name"
                            type="text"
                            className={`form-control ${errors.name ? "is-invalid" : ""}`}
                            {...register("name", {required: "Nome é obrigatório"})}
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            id="email"
                            type="email"
                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            {...register("email", {required: "Email é obrigatório"})}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpf" className="form-label">CPF</label>
                        <input
                            id="cpf"
                            type="cpf"
                            className={`form-control ${errors.cpf ? "is-invalid" : ""}`}
                            {...register("cpf", {required: "CPF é obrigatório"})}
                        />
                        {errors.cpf && <div className="invalid-feedback">{errors.cpf.message}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Senha</label>
                        <input
                            id="password"
                            type="password"
                            className={`form-control ${errors.password ? "is-invalid" : ""}`}
                            {...register("password", {
                                required: "Senha é obrigatória",
                                minLength: {value: 6, message: "A senha deve ter no mínimo 6 caracteres"},
                            })}
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirmar Senha</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                            {...register("confirmPassword", {
                                required: "Confirmação de senha é obrigatória",
                                validate: (value) =>
                                    value === password || "As senhas não coincidem",
                            })}
                        />
                        {errors.confirmPassword && (
                            <div className="invalid-feedback">{errors.confirmPassword.message}</div>
                        )}
                    </div>
                    <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                        {loading ? "Registrando..." : "Registrar"}
                    </button>
                </form>
            </div>
        </div>
    );
}
