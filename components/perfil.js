export default function Perfil({user}) {
    if (!user) {
        return <p>Informações do usuário não disponíveis.</p>;
    }

    return (
        <div className="card mb-4" style={{maxWidth: '500px', margin: 'auto'}}>
            <div className="card-header bg-primary text-white text-center">
                <h4 className="m-0">Informações do Usuário</h4>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-12">
                        <h5>{user.name}</h5>
                        <p><strong>Email:</strong> {user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
