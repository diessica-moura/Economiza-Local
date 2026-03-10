import { auth, MEU_UID_ADMIN } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const painel = document.getElementById('painel');
const msg = document.getElementById('msg');
const btnSair = document.getElementById('btn-sair');

onAuthStateChanged(auth, (user) => {
    if (user) {
        // Alguém está logado. Vamos ver se é você pelo UID:
        if (user.uid === MEU_UID_ADMIN) {
            msg.style.display = 'none';
            painel.style.display = 'block';
        } else {
            // É outro usuário (talvez um lojista), negue o acesso
            msg.innerHTML = `
                <p style="color:red">⚠️ Acesso Negado. Você não é a administradora.</p>
                <button onclick="window.location.href='index.html'">Voltar ao Início</button>
            `;
        }
    } else {
        // NINGUÉM está logado. Em vez de expulsar, vamos dar o botão de login:
        msg.innerHTML = `
            <p>Você precisa se identificar para entrar aqui.</p>
            <button onclick="window.location.href='login-loja.html'" style="background:#007bff; color:white; padding:10px; border:none; border-radius:5px; cursor:pointer;">
                Ir para Tela de Login
            </button>
        `;
    }
});

if(btnSair) {
    btnSair.addEventListener('click', () => {
        signOut(auth).then(() => window.location.href = "index.html");
    });
}
