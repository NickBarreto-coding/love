// Definir a data inicial do relacionamento
const startDate = new Date("2023-03-16T00:00:00-03:00"); // Data de início com o fuso horário de Brasília (-03:00)
const timeDisplay = document.getElementById("tempo-juntos");

function updateTimeTogether() {
    const now = new Date(); // Hora atual do cliente
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24)); // Calcular dias
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24); // Calcular horas
    const minutes = Math.floor((difference / (1000 * 60)) % 60); // Calcular minutos
    const seconds = Math.floor((difference / 1000) % 60); // Calcular segundos

    // Exibir a contagem de tempo na tela
    timeDisplay.textContent = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

// Atualizar o contador a cada 1 segundo
setInterval(updateTimeTogether, 1000);
updateTimeTogether();

// Tocar música automaticamente
const audio = document.querySelector("audio");
audio.play().catch(function(error) {
    console.log("Erro ao tentar tocar a música: ", error);
});
