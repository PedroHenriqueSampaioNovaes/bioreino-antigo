export default class ValidateValidade {
  constructor(element) {
    this.element = element;
  }

  clear(validade) {
    return validade.replace(/\D/g, '');
  }

  buildValidade(validade) {
    return validade.replace(/(\d{2})(\d{4})/g, '$1/$2');
  }

  format(validade) {
    const validadeClear = this.clear(validade);
    return this.buildValidade(validadeClear);
  }

  valid(validade) {
    const matchValidade = validade.match(/\d{2}[-/]?\d{4}/g);
    return matchValidade && matchValidade[0] === validade;
  }

  validateOnChange(validadeElement) {
    if (this.valid(validadeElement.value)) {
      validadeElement.value = this.format(validadeElement.value);
      validadeElement.classList.remove('erro');
      validadeElement.nextElementSibling.classList.remove('ativo');
    } else {
      validadeElement.classList.add('erro');
      validadeElement.nextElementSibling.classList.add('ativo');
    }
  }

  createErroSpan() {
    const span = document.createElement('span');
    span.innerText = 'Validade incorreta';
    span.classList.add('erro_text');
    this.element.parentElement.insertBefore(
      span,
      this.element.nextElementSibling,
    );
  }

  addEvent() {
    this.element.addEventListener('change', () => {
      this.validateOnChange(this.element);
    });
  }

  init() {
    this.addEvent();
    this.createErroSpan();
    return this;
  }
}
