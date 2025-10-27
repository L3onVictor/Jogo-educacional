let respostaCorreta;

function novaConta() {
  const n1 = Math.floor(Math.random() * 10);
  const n2 = Math.floor(Math.random() * 10);
  respostaCorreta = n1 + n2;

  document.getElementById("conta").textContent = `${n1} + ${n2} = ?`;

  const opcoes = [
    respostaCorreta,
    respostaCorreta + 1,
    respostaCorreta - 1
  ].sort(() => Math.random() - 0.5);

  const div = document.getElementById("opcoes");
  div.innerHTML = "";
  opcoes.forEach(op => {
    const btn = document.createElement("button");
    btn.textContent = op;
    btn.onclick = () => verificar(op, btn);
    div.appendChild(btn);
  });

  const allButtons = document.querySelectorAll('#opcoes button');
  allButtons.forEach(btn => {
    btn.style.backgroundColor = '';
    btn.disabled = false;
  });
}

function verificar(valor, botao) {


  if (valor === respostaCorreta) {
    botao.style.backgroundColor = "#4CAF50";
    
    setTimeout(novaConta, 1000);
    botao.disabled = true;
    
  } else {
    botao.style.backgroundColor = "#f44336";
    
    perderVida();
    
    setTimeout(novaConta, 1000);
    botao.disabled = true;
  }
}

let vidas = 3;

function perderVida() {
  const coracoes = document.querySelectorAll(".coracao:not(.perdida)");
  if (coracoes.length > 0) {
    const ultimo = coracoes[coracoes.length - 1];
    ultimo.classList.add("perdida");
    vidas--;

    if (vidas <= 0) {
      setTimeout(() => {
        alert("Bicho burro do carai kkkkkkkkkkkkkjjjjjjjkkkkkj");
        reiniciarJogo();
      }, 500);
    }
  }
}

function reiniciarJogo() {
  vidas = 3;
  const coracoes = document.querySelectorAll(".coracao");
  coracoes.forEach(coracao => coracao.classList.remove("perdida"));
  novaConta();
}
novaConta();