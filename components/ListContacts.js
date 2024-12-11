export default function ListContacts({contacts}) {
    return (
        <div className="container">
            <h1>Lista de Contatos</h1>
            <div className="accordion" id="accordionContatos">
                {contacts.map((contact, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target={`#${contact.id}`} aria-expanded="true"
                                    aria-controls={`${contact.id}`}>
                                {contact.name}
                                {contact.createdAt.seconds
                                    ? <small
                                        className="text-muted"> - {new Date(contact.createdAt.seconds * 1000).toLocaleString()}</small>
                                    : ""
                                }
                            </button>
                        </h2>
                        <div id={`${contact.id}`} className="accordion-collapse collapse"
                             data-bs-parent="#accordionContatos">
                            <div className="accordion-body">
                                <p>{contact.email}</p>
                                <p>{contact.message}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}