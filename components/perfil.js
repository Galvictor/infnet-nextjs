import PropTypes from 'prop-types';
import Image from "next/image";

export default function Perfil({ user }) {
    if (!user) {
        return <p>Informações do usuário não disponíveis.</p>;
    }

    return (
        <div className="card mb-4" style={{ maxWidth: '500px', margin: 'auto' }}>
            <div className="card-header bg-primary text-white text-center">
                <h4 className="m-0">Informações do Usuário</h4>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-4">
                        <Image
                            width={100}
                            height={100}
                            src={user.image}
                            alt="Foto do usuário"
                            className="img-fluid rounded-circle"
                            style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                        />
                    </div>
                    <div className="col-8">
                        <h5>{user.firstName} {user.lastName}</h5>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Gênero:</strong> {user.gender}</p>
                        <p><strong>Website:</strong>
                            <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-primary">
                                {user.website}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Validação das props
Perfil.propTypes = {
    user: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        website: PropTypes.string.isRequired,
    }).isRequired,
};
