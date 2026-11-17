const hero = document.querySelector('.hero');
const pigImage = document.getElementById('pigImage');

hero.addEventListener('mousemove', (event) => {
  const rect = hero.getBoundingClientRect();

  const x = event.clientX - rect.left - rect.width / 2;
  const y = event.clientY - rect.top - rect.height / 2;

  if (y < -60) {
    pigImage.src = 'pig-up.png';
  } else if (y > 60) {
    pigImage.src = 'pig-down.png';
  } else if (Math.abs(x) > 80) {
    pigImage.src = 'pig-side.png';
  } else {
    pigImage.src = 'pig-center.png';
  }
});

hero.addEventListener('mouseleave', () => {
  pigImage.src = 'pig-center.png';
});