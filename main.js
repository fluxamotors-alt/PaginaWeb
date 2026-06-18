// Menú móvil
document.addEventListener('click', function (e) {
  const t = e.target.closest('.nav__toggle');
  if (t) {
    document.querySelector('.nav__links').classList.toggle('open');
  }
});
