// script.js

// Seleciona os botões
const button1 = document.getElementById('colorButton');
const button2 = document.getElementById('colorButton2');

// Função para gerar uma cor aleatória em formato RGB
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Função para mudar a cor de fundo
function changeBackgroundColor(button) {
    if (button === button1) {
        document.body.style.backgroundColor = getRandomColor(); // Cor aleatória para o botão 1
    } else if (button === button2) {
        document.body.style.backgroundColor = 'lightcoral'; // Cor fixa para o botão 2
    }
}

// Adiciona event listeners aos botões
button1.addEventListener('click', () => changeBackgroundColor(button1));
button2.addEventListener('click', () => changeBackgroundColor(button2));
