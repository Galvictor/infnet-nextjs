'use client';

import { useState } from 'react';

export default function ContactForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await onSubmit(formData);
        alert(result.message || 'Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-4">
            <h1>Componente com &#34;use client&#34; e handleSubmit usando &#34;use server&#34;</h1>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nome</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensagem</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    rows="4"
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );
}
