export default function initDropdownMenu() {
  const navegacaoUsuario = document.querySelector('[data-dropdown="nav"]');
  const menuDropdown = document.querySelector('[data-dropdown="menu"]');
  const events = ['click', 'touch'];
  
  function closeMenu(element, outside) {
    if (!menuDropdown.contains(element)) {
      menuDropdown.classList.remove('ativo');
      navegacaoUsuario.removeAttribute(outside);
    }
  }
  
  function openMenu(event) {
    menuDropdown.classList.add('ativo');
    const outside = 'data-outside';
  
    if (navegacaoUsuario.hasAttribute(outside)) {
      closeMenu(event.target, outside);
    } else {
      navegacaoUsuario.setAttribute(outside, '');
    }
  }

  if (menuDropdown && navegacaoUsuario) {
    events.forEach((event) => navegacaoUsuario.addEventListener(event, openMenu));
  }
}

