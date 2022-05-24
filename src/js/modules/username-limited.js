export default function initUserNameLimited() {
  const name = document.querySelector('[data-usuario="name"]');

  if (name) {
    const shortName = name.innerText.slice(0, 14).trim();
    
    if (name.innerText.length >= 15) name.innerText = `${shortName}...`;
    else name.innerText = shortName;
  }
}
