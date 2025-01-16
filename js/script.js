// script.js

const startDate = new Date("2023-03-16T00:00:00"); // Insira a data de início do relacionamento
const timeDisplay = document.getElementById("time-together");
const music = document.getElementById("music"); // Adicionando referência para o áudio
const playButton = document.getElementById("play-button"); // Botão de play

// Função para atualizar o contador de tempo
function updateTimeTogether() {
    const now = new Date();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    timeDisplay.textContent = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

// Função para verificar se o dispositivo é móvel
function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

// Função para iniciar a música ao clicar no botão (para dispositivos móveis)
function startMusic() {
    music.play().catch(error => {
        console.log('Erro ao tentar iniciar a música:', error);
    });
    playButton.style.display = 'none'; // Esconde o botão após o clique
}

// Verifica se é dispositivo móvel ou desktop
if (!isMobile()) {
    // Tenta tocar a música automaticamente em dispositivos desktop
    music.play().catch(error => {
        console.log('Erro ao tentar iniciar a música no desktop:', error);
    });
} else {
    // Exibe o botão de play nos dispositivos móveis
    playButton.style.display = 'block';
}

// Atualiza o contador a cada segundo
setInterval(updateTimeTogether, 1000);
updateTimeTogether();
