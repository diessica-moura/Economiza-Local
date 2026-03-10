// 1. Importe as funções que vamos usar (Authentication e Firestore)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 2. O seu código chave (copie exatamente como está na sua imagem)
const firebaseConfig = {
  apiKey: "AIzaSyCDs52kk5BLAJ...", 
  authDomain: "economizalocal.firebaseapp.com",
  projectId: "economizalocal",
  storageBucket: "economizalocal.appspot.com",
  messagingSenderId: "404884645763",
  appId: "1:404884645763:web:d001535363531d7563b8b6",
  measurementId: "G-GLV4MM003Q"
};

// 3. Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// 4. Crie as variáveis para usar o Login e o Banco de Dados
export const auth = getAuth(app);
export const db = getFirestore(app);
