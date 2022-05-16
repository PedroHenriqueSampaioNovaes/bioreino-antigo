export default function initScrollSuave() {}

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleClick(event) {
  event.preventDefault();
  const href = this.getAttribute('href');
  const session = document.querySelector(href);

  session.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'start',
  });
}

if (linksInternos) {
  linksInternos.forEach((link) => link.addEventListener('click', handleClick));
}
