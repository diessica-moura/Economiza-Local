import { auth, MEU_UID_ADMIN } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const painel = document.getElementById('painel-admin');

onAuthStateChanged(auth, (user) => {
    if (user && user.uid === MEU_UID_ADMIN) {
        console.log("Acesso garantido!");
        if (painel) painel.style.display = 'block'; // Mostra o painel
    } else {
        // Se não for admin ou não estiver logado, expulsa
        window.location.href = "index.html";
    }
});
