// Lógica de Navegação
function showSection(id) {
    // Remove a classe active de todas as seções
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    // Adiciona na seção clicada
    document.getElementById(id).classList.add('active');
}

// Lógica do Simulador
let umidade = 50;
const barraUmidade = document.getElementById('barra-umidade');
const valorUmidade = document.getElementById('valor-umidade');
const feedbackTexto = document.getElementById('feedback-texto');
const plantaVisual = document.getElementById('planta-visual');
const emojiPlanta = document.getElementById('emoji-planta');

// Função que diminui a umidade automaticamente (simulando o tempo)
setInterval(() => {
    if (umidade > 0) {
        umidade -= 2;
        atualizarInterface();
    }
}, 3000); // Diminui a cada 3 segundos

function irrigar() {
    if (umidade < 100) {
        umidade += 15;
        if (umidade > 100) umidade = 100;
        atualizarInterface();
    }
}

function atualizarInterface() {
    barraUmidade.style.width = umidade + '%';
    valorUmidade.innerText = umidade;

    if (umidade < 30) {
        feedbackTexto.innerText = "ALERTA: Solo muito seco! Ligue a irrigação.";
        feedbackTexto.style.color = "red";
        plantaVisual.style.backgroundColor = "#d7ccc8";
        emojiPlanta.innerText = "🥀";
    } else if (umidade > 80) {
        feedbackTexto.innerText = "Cuidado: Solo muito encharcado!";
        feedbackTexto.style.color = "blue";
        emojiPlanta.innerText = "🌿";
    } else {
        feedbackTexto.innerText = "O solo está em condições ideais.";
        feedbackTexto.style.color = "green";
        plantaVisual.style.backgroundColor = "#aed581";
        emojiPlanta.innerText = "🌳";
    }
}
