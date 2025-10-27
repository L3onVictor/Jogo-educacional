function abrirModal(idModal) {
  document.getElementById(idModal).style.display = "block";
}

function fecharModal(idModal) {
  document.getElementById(idModal).style.display = "none";
}

window.onclick = function(event) {
  const modais = document.querySelectorAll(".modal");
  modais.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};
