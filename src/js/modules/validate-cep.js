export default class ValidateCep {
  constructor(element) {
    this.element = element;
  }

  clear(cep) {
    return cep.replace(/\D/g, '');
  }

  buildCep(cep) {
    return cep.replace(/(\d{5})(\d{3})/g, '$1-$2');
  }

  format(cep) {
    const cepClear = this.clear(cep);
    return this.buildCep(cepClear);
  }

  valid(cep) {
    const matchCep = cep.match(/\d{5}[-.]?\d{3}/g);
    return matchCep && matchCep[0] === cep;
  }

  validateOnChange(cepElement) {
    if (this.valid(cepElement.value)) {
      cepElement.value = this.format(cepElement.value);
      cepElement.classList.remove('erro');
      cepElement.nextElementSibling.classList.remove('ativo');
    } else {
      cepElement.classList.add('erro');
      cepElement.nextElementSibling.classList.add('ativo');
    }
  }

  createErroSpan() {
    const span = document.createElement('span');
    span.innerText = 'CEP incorreto';
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
