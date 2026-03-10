// Importa as funções necessárias do Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Suas configurações reais (vindas da sua imagem)
const firebaseConfig = {
  apiKey: "AIzaSyCDs52kk5BLAJ2bkKUNLimGmIy0KyIF6b0",
  authDomain: "economizalocal.firebaseapp.com",
  projectId: "economizalocal",
  storageBucket: "economizalocal.firebasestorage.app",
  messagingSenderId: "404884645763",
  appId: "1:404884645763:web:d001535363531d7563b8b6",
  measurementId: "G-GLV4MM003Q"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta o serviço de autenticação para usar nos outros arquivos
export const auth = getAuth(app);

// ATENÇÃO: Vá no seu console do Firebase e copie o seu UID de admin 
// e cole entre as aspas abaixo para o login funcionar!
export const MEU_UID_ADMIN = "Tk9CpRVdIkhv1DQMM54YjqRHwj93";
