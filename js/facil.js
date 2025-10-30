let respostaCorreta;

function novaConta() {
  let n1 = Math.floor(Math.random() * 10);
  let n2 = Math.floor(Math.random() * 10);

  const operacao = ["+", "-"][Math.floor(Math.random() * 2)];

  if (operacao === "+") {
    respostaCorreta = n1 + n2;
  } else {
    if (n1 < n2) {
      [n1, n2] = [n2, n1];
    }
      respostaCorreta = n1 - n2;
    
  }

  document.getElementById("conta").textContent = `${n1} ${operacao} ${n2} = ?`;

  const opcoes = []
  opcoes.push(respostaCorreta);

  while (opcoes.length < 4) {
    let falso = respostaCorreta + Math.floor(Math.random() * 7) - 3;

    if (falso < 0) falso = 0;

    if (!opcoes.includes(falso)) {
      opcoes.push(falso);
    }
  }
  opcoes.sort(() => Math.random() - 0.5);

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
  const allButtons = document.querySelectorAll('#opcoes button');
  allButtons.forEach(btn => btn.disabled = true);

  if (valor === respostaCorreta) {
    botao.style.backgroundColor = "#4CAF50";
    setTimeout(novaConta, 1000);


  } else {
    botao.style.backgroundColor = "#f44336";
    botao.disabled = true;
    perderVida();

    setTimeout(novaConta, 1000);
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
        alert("Suas vidad acabaram! Reiniciando o jogo.");
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