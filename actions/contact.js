'use server';

export async function submitContactForm({name, email, message}) {
    try {
        // Simular envio de e-mail ou salvar no banco de dados
        console.log('Formulário recebido:', {name, email, message});

        // Resposta simulada de sucesso
        return {
            status: 'success',
            message: 'Sua mensagem foi enviada com sucesso!'
        };
    } catch (error) {
        console.error('Erro ao enviar o formulário:', error);
        return {
            status: 'error',
            message: 'Houve um erro ao enviar sua mensagem. Tente novamente mais tarde.'
        };
    }
}
