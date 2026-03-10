import { auth, MEU_UID_ADMIN } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const painel = document.getElementById('painel');
const msg = document.getElementById('msg');
const btnSair = document.getElementById('btn-sair');

onAuthStateChanged(auth, (user) => {
    if (user && user.uid === MEU_UID_ADMIN) {
        msg.style.display = 'none';
        painel.style.display = 'block';
    } else {
        msg.innerHTML = "❌ Acesso Negado.<br>Redirecionando...";
        setTimeout(() => window.location.href = "index.html", 2500);
    }
});

btnSair.addEventListener('click', () => {
    signOut(auth).then(() => window.location.href = "index.html");
});
import { db } from './firebase-config.js';
import { collection, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Função para listar os mercados na tela
async function carregarMercados() {
    const listaDiv = document.getElementById('lista-mercados'); // Verifique se esse ID existe no seu admin.html
    const querySnapshot = await getDocs(collection(db, "mercados"));
    
    listaDiv.innerHTML = "<h3>Mercados Ativos:</h3>";
    
    querySnapshot.forEach((docSnap) => {
        const dados = docSnap.data();
        listaDiv.innerHTML += `
            <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 5px; border-radius: 5px;">
                <strong>${dados.nome}</strong> - ${dados.cidade}
                <button onclick="excluirMercado('${docSnap.id}')" style="background:red; width:auto; padding: 5px 10px; margin-left: 10px;">Excluir</button>
            </div>
        `;
    });
}

// Função para deletar um mercado
window.excluirMercado = async (id) => {
    if (confirm("Tem certeza que deseja remover este mercado do app?")) {
        await deleteDoc(doc(db, "mercados", id));
        alert("Mercado removido!");
        location.reload(); // Recarrega para atualizar a lista
    }
};

// Chama a lista assim que o admin logar
carregarMercados();

