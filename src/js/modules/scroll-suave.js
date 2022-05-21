export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  function handleClick(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    const session = document.querySelector(href);

    const topElement = session.getBoundingClientRect().top - 86.05;
    // window.scrollBy({
    //   top: topElement,
    //   behavior: 'smooth',
    // });
    document.querySelector('.cabecalho').scrollBy({
      top: topElement,
      behavior: 'smooth',
    });
    console.log('a')
    linksInternos.forEach((link) => link.classList.remove('ativo'));
    this.classList.add('ativo');
  }

  if (linksInternos) {
    linksInternos.forEach((link) =>
      link.addEventListener('click', handleClick),
    );
  }
}
