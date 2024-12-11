import Layout from "@/components/layout";
import SEO from "@/components/seo";
import ContactForm from "@/components/ContactForm";
import {addContact, listContacts} from "@/libs/firebaseClient";
import ListContacts from "@/components/ListContacts";
import {useEffect, useState} from "react";
import WithAuth from "@/components/withAuth";

function ContactPage() {

    const [contacts, setContacts] = useState([]);

    const submitContactForm = async (data) => {
        const result = await addContact(data);

        if (result.success) {
            const newContacts = await listContacts();
            setContacts(newContacts);
        }

        return result;
    };


    useEffect(() => {
            listContacts().then(contacts => {
                setContacts(contacts);
            });
        }
        , []);

    return <Layout>
        <SEO title="Contato"
             description="Bem-vindo à página inicial do Meu Site. Explore conteúdos incríveis!"></SEO>
        <div className="container top-navbar">
            <h1 className="text-2xl font-bold">Contato</h1>
            <p className="text-gray-500">Entre em contato conosco!</p>

            <div className="row">
                <div className="col-6">
                    <ContactForm onSubmit={submitContactForm}/>

                </div>
                <div className="col-6">
                    <ListContacts contacts={contacts}/>
                </div>
            </div>


        </div>
    </Layout>
}

export default WithAuth(ContactPage);
