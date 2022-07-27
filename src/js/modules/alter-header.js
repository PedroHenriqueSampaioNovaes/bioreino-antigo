export default function initAlterHeader() {
  const cabecalho = document.querySelector('[data-header]');

  function toggleHeader() {
    const distanciaScroll = window.pageYOffset > (cabecalho.offsetHeight - 75);
    if (distanciaScroll) {
      if (!cabecalho.classList.contains('scroll')) {
        cabecalho.classList.add('scroll');
      }
    } else {
      cabecalho.classList.remove('scroll');
    }
  }
  
  if (cabecalho) {
    toggleHeader()
    window.addEventListener('scroll', toggleHeader);
  }
}
