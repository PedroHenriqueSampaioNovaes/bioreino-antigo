export default function initSelectionPlano() {
  const total = document.querySelector('.total');
  const plano = document.querySelector('#plano');

  function selectPrice() {
    const elementPrice = document.querySelector(`[value="${this.value}"]`);
    const price = elementPrice.getAttribute('data-price');
    total.innerText = `R$${price}`;
  }
  selectPrice();
  
  if (total && plano) {
    plano.addEventListener('click', selectPrice);
  }
}
