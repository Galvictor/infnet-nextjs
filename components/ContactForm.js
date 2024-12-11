import {useForm} from "react-hook-form";
import {useState} from "react";

export default function ContactForm({onSubmit}) {

    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const [result, setResult] = useState({
        message: "",
        success: false,
    });

    const onSubmitFn = async (data) => {
        console.log(data);
        const _result = await onSubmit(data);
        setResult(_result);
        if (_result.success) {
            reset();
        }

    };

    return (
        <form onSubmit={handleSubmit(onSubmitFn)} className="container mt-4">
            {result.message && (
                <div className={`alert ${result.success ? "alert-success" : "alert-danger"}`}>
                    {result.message}
                </div>
            )}
            <h1>Componente Usando Firebase</h1>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nome</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    {...register("name", {required: true})}
                    className="form-control"
                    required
                />
            </div>
            {errors.name && <p className="text-danger">Campo obrigatório</p>}
            <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    {...register("email", {required: true})}
                    className="form-control"
                    required
                />
            </div>
            {errors.email && <p className="text-danger">Campo obrigatório</p>}
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensagem</label>
                <textarea
                    id="message"
                    name="message"
                    {...register("message", {required: true})}
                    className="form-control"
                    rows="4"
                    required
                />
            </div>
            {errors.message && <p className="text-danger">Campo obrigatório</p>}
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );
}
