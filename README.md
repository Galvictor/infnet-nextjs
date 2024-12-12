# Meu Projeto com Next.js e Firebase

Este projeto utiliza Next.js como framework de desenvolvimento e Firebase como backend para autenticação, armazenamento de dados e upload de arquivos. Ele inclui funcionalidades como autenticação de usuários, registro, proteção de rotas e gerenciamento de usuários.

## Tecnologias Utilizadas

- **Next.js**: Framework React para aplicações web.
- **Firebase**:
   - Authentication: Gerenciamento de usuários e login.
   - Firestore: Banco de dados NoSQL.
- **React Hook Form**: Gerenciamento de formulários.
- **Bootstrap**: Estilização das páginas.
- **Firebase Admin SDK**: Verificação de tokens no lado do servidor.

## Funcionalidades

- **Registro de Usuários**: Permite que novos usuários se cadastrem com email e senha.
- **Login de Usuários**: Autenticação com redirecionamento baseado no estado de login.
- **Proteção de Rotas**: Acesso permitido apenas para usuários autenticados.
- **Gerenciamento de Usuários**: Listagem e armazenamento de dados de usuários no Firestore
- **Pagina de Produto**: Página de produto com informações detalhadas com **getServerSideProps**.
- **Produtos usando API**: https://dummyjson.com/products/search?q=phone
- **Pagina de Contato**: Página de contato com formulário de envio de mensagem para o Firebase.

## Instalação e Configuração

### 1. Clone o Repositório
```bash
https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instale as Dependências
```bash
npm install
```

### 3. Configure o Firebase

- Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
- Habilite **Authentication** e configure o método de login com email e senha.
- Habilite o **Firestore**.
- Gere as configurações do SDK do Firebase e salve-as em um arquivo `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=SEU_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=SEU_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID=SEU_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=SEU_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=SEU_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=SEU_APP_ID
```

### 4. Configure as Regras do Firestore

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    // Regras para a coleção 'users'
    match /users/{userId} {
      allow read, write: if request.auth != null;
    }

    // Regras para a coleção 'contatos'
    match /contatos/{documentId} {
      allow read, write: if true;
    }
  }
}
```

### 5. Inicialize o Servidor de Desenvolvimento
```bash
npm run dev
```
Acesse o projeto em [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

```
/
├── components/   # Componentes reutilizáveis
├── pages/        # Páginas do Next.js
├── libs/         # Funções utilitárias e integrações
├── styles/       # Arquivos de estilo
├── .env.local    # Variáveis de ambiente
├── firebaseClient.js  # Configuração do Firebase
```

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

