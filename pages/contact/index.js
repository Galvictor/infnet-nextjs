import Layout from "@/components/layout";
import SEO from "@/components/seo";
import {submitContactForm} from "@/actions/contact";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
    return <Layout>
        <SEO title="Contato"
             description="Bem-vindo à página inicial do Meu Site. Explore conteúdos incríveis!"></SEO>
        <div className="container top-navbar">
            <h1 className="text-2xl font-bold">Contato</h1>
            <p className="text-gray-500">Entre em contato conosco!</p>

            <ContactForm onSubmit={submitContactForm}/>

        </div>
    </Layout>
}
