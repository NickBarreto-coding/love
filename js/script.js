// script.js
const startDate = new Date("2023-03-16T00:00:00"); // Insira a data de início do relacionamento
const timeDisplay = document.getElementById("time-together");

function updateTimeTogether() {
    const now = new Date();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    timeDisplay.textContent = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

setInterval(updateTimeTogether, 1000);
updateTimeTogether();
