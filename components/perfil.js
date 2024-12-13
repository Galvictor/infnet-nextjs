export default function Perfil({user}) {
    if (!user) {
        return <p>Informações do usuário não disponíveis.</p>;
    }

    return (
        <div className="card mb-4">
            <div className="card-header bg-primary text-white text-center">
                <h4 className="m-0">Informações do Usuário</h4>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-12">
                        <p><strong>Nome:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>CPF:</strong> {user.cpf}</p>
                        <p><strong>Role:</strong> {user.role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
