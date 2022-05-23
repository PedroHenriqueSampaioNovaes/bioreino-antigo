export default function initClosePopup() {
  const buttonClose = document.querySelector('[data-popup="fechar"]');

  function closePopup() {
    this.parentElement.remove();
  }
  
  if (buttonClose) buttonClose.addEventListener('click', closePopup);
}
