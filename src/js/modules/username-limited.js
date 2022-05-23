export default function initUserNameLimited() {
  const name = document.querySelector('[data-usuario="name"]');
  const splitName = name.innerText.split(' ');
  const [firstName] = splitName;
  const shortName = firstName.slice(0, 14).trim();
  
  if (firstName.length >= 15) name.innerText = `${shortName}...`;
  else name.innerText = shortName;
}
