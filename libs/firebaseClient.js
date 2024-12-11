import {initializeApp} from "firebase/app";
import {getFirestore, collection, addDoc, serverTimestamp, getDocs, orderBy, query} from "firebase/firestore";
import {getAuth} from "firebase/auth";

require("dotenv").config();


// Configurações do Firebase
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
}

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Exporta o Firestore
const db = getFirestore(app);

// Função para adicionar o contato no Firestore
export const addContact = async (contactData) => {
    try {
        const docRef = await addDoc(collection(db, "contatos"), {
            ...contactData,
            createdAt: serverTimestamp(),  // Adiciona a data de criação automaticamente
        });
        console.log("Documento adicionado com ID: ", docRef.id);
        return {message: "Mensagem enviada com sucesso! Documento adicionado com ID: " + docRef.id, success: true};
    } catch (e) {
        console.error("Erro ao adicionar o documento: ", e);
        return {message: "Erro ao enviar a mensagem.", success: false};
    }
};

// listagem de contatos
export const listContacts = async () => {
    const contactsQuery = query(collection(db, "contatos"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(contactsQuery);

    let contacts = [];
    querySnapshot.forEach((doc) => {
        contacts.push({...doc.data(), id: doc.id});
    });

    console.log(contacts);

    return contacts;
};

export const auth = getAuth();
