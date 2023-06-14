// script.js

// Função para exibir a seção de compartilhamento
function toggleShareButtons() {
  const shareButtons = document.querySelector('.share-buttons');
  shareButtons.classList.toggle('show');
}

// Função para copiar o link para a área de transferência
function copyLink() {
  const link = window.location.href;
  navigator.clipboard.writeText(link).then(() => {
    alert('Link copiado para a área de transferência!');
  });
}

// Obtém os elementos relevantes
const shareButton = document.querySelector('.share-button');
const shareIcon = document.querySelector('.share-icon');
const linkCards = document.querySelectorAll('.link-card');

// Adiciona os ouvintes de evento aos elementos
shareButton.addEventListener('click', toggleShareButtons);
shareIcon.addEventListener('click', toggleShareButtons);

linkCards.forEach((linkCard) => {
  const shareOutlineIcon = linkCard.querySelector('.icons[name="share-outline"]');
  const linkDescription = linkCard.querySelector('.link-description');
  
  linkCard.addEventListener('mouseenter', () => {
    shareOutlineIcon.style.display = 'none';
    linkDescription.style.display = 'none';
  });

  linkCard.addEventListener('mouseleave', () => {
    shareOutlineIcon.style.display = 'block';
    linkDescription.style.display = 'block';
  });
});

const copyButtons = document.querySelectorAll('.copy-button');

copyButtons.forEach((copyButton) => {
  copyButton.addEventListener('click', copyLink);
});

// Obtém o botão de alternância de tema
const themeToggle = document.getElementById('theme-toggle');

// Verifica se o usuário possui uma preferência de tema definida
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Define a classe 'dark-mode' no body com base na preferência do usuário
if (prefersDarkMode) {
  document.body.classList.add('dark-mode');
}

// Adiciona um ouvinte de evento de clique ao botão de alternância
themeToggle.addEventListener('click', () => {
  // Alterna a classe 'dark-mode' no elemento body
  document.body.classList.toggle('dark-mode');
});
