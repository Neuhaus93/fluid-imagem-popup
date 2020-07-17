const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery img');
const original = document.querySelector('.full-img');
const caption = document.querySelector('.caption');

previews.forEach((preview) => {
  const oririnalSrc = preview.getAttribute('data-original');
  const altText = preview.alt;

  preview.addEventListener('click', () => {
    modal.classList.add('open');
    original.classList.add('open');

    original.src = oririnalSrc;
    original.alt = altText;
    caption.textContent = altText;
  });
});

modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    modal.classList.remove('open');
    original.classList.remove('open');
  }
});
