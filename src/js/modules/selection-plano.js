export default function initSelectionPlano() {
  
}

const total = document.querySelector('.total');
const plano = document.querySelector('#plano');

function selectPrice() {
  
  const elementPrice = document.querySelector(`[value="${this.value}"]`)
  const price = elementPrice.getAttribute('data-price');
  total.innerText = `R$${price}`;
  
}
plano.addEventListener('click', selectPrice);