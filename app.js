'use strict';

const switcher = document.querySelector('.btn');

// Define o tema inicial baseado na classe do body ou no localStorage
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light-theme';
    document.body.className = savedTheme;
    updateButtonText();
}

// Atualiza o texto do botão conforme o tema atual
function updateButtonText() {
    switcher.textContent = document.body.classList.contains('dark-theme') ? 'Light' : 'Dark';
}

// Alterna entre temas
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    
    // Salva a preferência
    const currentTheme = document.body.className;
    localStorage.setItem('theme', currentTheme);
    
    updateButtonText();
});

// Inicializa o tema
initTheme();