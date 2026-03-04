const divSecreta = document.getElementById("entradaSecreta")
const overlay = document.querySelector('#novoOverlay');

const entraAdm = document.getElementById("entrarAdm");

document.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 'c' && (event.ctrlKey || event.metaKey)) {
    event.preventDefault();

    divSecreta.classList.remove('escondido');
    overlay.style.display = "flex"; 
  }
});

entraAdm.addEventListener('click', () => {
  const nomeAdm = document.getElementById("nomeAdm").value;
  const senhaAdm = document.getElementById("senhaAdm").value;
});