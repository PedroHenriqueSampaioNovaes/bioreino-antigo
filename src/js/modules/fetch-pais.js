export default function initFetchPais() {
  const elementPais = document.querySelector('#pais');

  fetch('https://servicodados.ibge.gov.br/api/v1/paises/')
    .then((jsonPais) => jsonPais.json())
    .then((paises) => {
      paises.forEach(pais => {
        // console.log(pais.nome.abreviado);
        console.log()
      });
    });
}
