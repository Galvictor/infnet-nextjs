import {useForm} from "react-hook-form";
import {auth} from "@/libs/firebaseClient";
import {signInWithEmailAndPassword} from "firebase/auth";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const router = useRouter();
    const [error, setError] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                router.push("/");
            }
        });
        return () => unsubscribe();
    }, [router]);

    const onSubmit = async (data) => {
        try {
            const user = await signInWithEmailAndPassword(auth, data.email, data.password);
            console.log(user);
            await router.push("/");
        } catch (error) {
            console.error("Erro ao fazer login:", error.message);
            //alert("Falha no login: " + error.message);
            setError("Falha no login: " + error.message);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow p-4" style={{width: "100%", maxWidth: "400px"}}>
                <h2 className="text-center mb-4">Login Firebase</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <small>teste@gmail.com</small>
                        <input
                            id="email"
                            type="email"
                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            {...register("email", {required: "Email é obrigatório"})}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Senha</label>
                        <small>teste123</small>
                        <input
                            id="password"
                            type="password"
                            className={`form-control ${errors.password ? "is-invalid" : ""}`}
                            {...register("password", {required: "Senha é obrigatória"})}
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Entrar</button>
                </form>
            </div>
        </div>
    );
}
