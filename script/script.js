let slides = document.querySelectorAll(".slide");
let index = 0;

function showNextSlide() {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
    });
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
}

// Mostra o primeiro slide e troca a cada 3 segundos
slides[index].classList.add("active");
setInterval(showNextSlide, 3000);

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  // Posição horizontal aleatória
  heart.style.left = Math.random() * 100 + 'vw';

  // Tamanho aleatório entre 20px e 40px
  const size = Math.random() * 20 + 20;
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;

  // Duração aleatória da animação
  heart.style.animationDuration = (Math.random() * 2 + 4) + 's';

  // Adiciona SVG do coração
  heart.innerHTML = `
    <svg viewBox="0 0 32 29.6" fill="red" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.6,0c-3.4,0-6.4,2.1-7.6,5.1C14.8,2.1,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4
        c0,9.3,16,21.2,16,21.2s16-11.9,16-21.2C32,3.8,28.2,0,23.6,0z"/>
    </svg>
  `;

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 300);

document.addEventListener("DOMContentLoaded", function () {
  const botaoMusica = document.getElementById("toggleMusica");
  const musica = document.getElementById("musicaFundo");
  let musicaLigada = false;

  botaoMusica.addEventListener("click", () => {
    if (musicaLigada) {
      musica.pause();
      botaoMusica.textContent = "🔇 Ligar Música";
    } else {
      musica.play().then(() => {
        botaoMusica.textContent = "🔊 Pausar Música";
      }).catch(erro => {
        console.error("Erro ao tentar tocar a música:", erro);
      });
    }
    musicaLigada = !musicaLigada;
  });
});