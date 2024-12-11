import {initializeApp} from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp,
    getDocs,
    getDoc,
    orderBy,
    query,
    setDoc,
    doc
} from "firebase/firestore";
import {createUserWithEmailAndPassword, updateProfile, getAuth} from "firebase/auth";

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

export const registerUser = async (email, password, name, role) => {
    try {
        // Criar o usuário com email e senha
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Atualizar o perfil do usuário (opcional)
        await updateProfile(user, {displayName: name});

        // Salvar informações adicionais no Firestore
        await setDoc(doc(db, "users", user.uid), {
            name: name,
            email: email,
            role: role,
            createdAt: new Date(),
        });

        console.log("Usuário registrado e informações salvas!");

        return user;

    } catch (error) {
        console.error("Erro ao registrar usuário:", error);
        return null;
    }
}

export const getUserData = async (uid) => {
    try {
        const userDoc = await getDoc(doc(db, "users", uid));
        if (userDoc.exists()) {
            console.log("Dados do usuário:", userDoc.data());
            return userDoc.data();
        } else {
            console.log("Nenhum dado encontrado para este usuário!");
            return null;
        }
    } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
        return null;
    }
}

export const getUsers = async () => {
    const usersCollection = collection(db, "users");
    const usersSnapshot = await getDocs(usersCollection);
    let users = [];
    usersSnapshot.forEach((doc) => {
        users.push({...doc.data(), id: doc.id});
    });
    return users;
}
