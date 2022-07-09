export default class ValidateCpf {
  constructor(element) {
    this.element = document.querySelector(element);
  }

  clear(cpf) {
    return cpf.replace(/\D/g, '');
  }

  buildCpf(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  }

  format(cpf) {
    const cpfClear = this.clear(cpf);
    return this.buildCpf(cpfClear);
  }

  valid(cpf) {
    const matchCpf = cpf.match(/(?:\d{3}[.-]?){3}\d{2}/g);
    return matchCpf && matchCpf[0] === cpf;
  }

  validateOnChange(cpfElement) {
    if (this.valid(cpfElement.value)) {
      cpfElement.value = this.format(cpfElement.value);
      cpfElement.classList.remove('erro');
      cpfElement.nextElementSibling.classList.remove('ativo');
    } else {
      cpfElement.classList.add('erro');
      cpfElement.nextElementSibling.classList.add('ativo');
    }
  }

  createErroSpan() {
    const span = document.createElement('span');
    span.innerText = 'CPF incorreto';
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
    if (this.element) {
      this.addEvent();
      this.createErroSpan();
    }
    return this;
  }
}
