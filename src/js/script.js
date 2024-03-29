import ScrollSuave from './modules/scroll-suave.js';
import initAlterHeader from './modules/alter-header.js';
import initSelectionPlano from './modules/selection-plano.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import ValidateCpf from './modules/validate-cpf.js';
import ValidateCep from './modules/validate-cep.js';
import initClosePopup from './modules/close-popup.js';
import initUserNameLimited from './modules/username-limited.js';
import ValidateValidade from './modules/validate-validade.js';
import initFetchPais from './modules/fetch-pais.js';

const scrollSuave = new ScrollSuave('a[href^="#"]', '.cabecalho', '[data-scroll]');
scrollSuave.init();

initAlterHeader();
initSelectionPlano();
initDropdownMenu();
initClosePopup();

const validateCpf = new ValidateCpf('#cpf');
validateCpf.init();

const cep = new ValidateCep('#cep');
cep.init();

const validade = new ValidateValidade('#validade');
validade.init();

initUserNameLimited();
initFetchPais();
