export default function initSelectionPlano() {
  const elementTotal = document.querySelector('.total');
  const plano = document.querySelector('#plano');

  function selectPrice() {
    const elementPrice = document.querySelector(`[value="${this.value}"]`);
    const price = elementPrice.getAttribute('data-price');
    elementTotal.innerText = `R$${price}`;
  }

  if (elementTotal && plano) {
    plano.addEventListener('click', selectPrice);
  }
}
