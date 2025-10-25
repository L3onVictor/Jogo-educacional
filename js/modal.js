// Abre o modal pelo id
function abrirModal(idModal) {
  document.getElementById(idModal).style.display = "block";
}

// Fecha o modal pelo id
function fecharModal(idModal) {
  document.getElementById(idModal).style.display = "none";
}

// Fecha se clicar fora da caixa branca
window.onclick = function(event) {
  const modais = document.querySelectorAll(".modal");
  modais.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};
