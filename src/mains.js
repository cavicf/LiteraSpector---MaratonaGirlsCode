const carrossel = document.querySelector('.carrossel');
const prevBtn = document.querySelector('.nav.prev');
const nextBtn = document.querySelector('.nav.next');

let currentIndex = 0;

function updateCarousel() {
  const width = document.querySelector('.carrosselContainer').offsetWidth;
  carrossel.style.transform = `translateX(-${currentIndex * width}px)`;
}

nextBtn.addEventListener('click', () => {
  const totalCards = carrossel.children.length;
  if (currentIndex < totalCards - 1) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

  document.getElementById("periodosLiterarios").addEventListener("change", function () {
    const url = this.value;
    if (url) {
      window.location.href = url;
    }
  });

window.addEventListener('resize', updateCarousel);
