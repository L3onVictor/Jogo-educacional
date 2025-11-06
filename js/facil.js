let respostaCorreta;
let resultado;

const audioCerto = new Audio("../sound/certo.mp3");
const audioErrado = new Audio('../sound/errado.mp3');

function novaConta() {
  let n1 = Math.floor(Math.random() * 11);
  let n2 = Math.floor(Math.random() * 11);

  const operacao = ["+", "-"][Math.floor(Math.random() * 2)];

  if (operacao === "+") {
    resultado = n1 + n2;
  } else {
    if (n1 < n2) {
      [n1, n2] = [n2, n1];
    }
    resultado = n1 - n2;
  }

  let texto = "";
  let indefinido = Math.floor(Math.random() * 4);

  if (indefinido < 1) {
    respostaCorreta = n1;
    texto = `? ${operacao} ${n2} = ${resultado}`;

  } else if (indefinido < 2) {
    respostaCorreta = n2;
    texto = `${n1} ${operacao} ? = ${resultado}`;

  } else {
    respostaCorreta = resultado;
    texto = `${n1} ${operacao} ${n2} = ?`;
  }

  document.getElementById("conta").textContent = texto;


  //document.getElementById("conta").textContent = `${n1} ${operacao} ${n2} = ?`;

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

  if (valor === respostaCorreta) {
    audioCerto.currentTime = 0;
    audioCerto.volume = 0.5;
    audioCerto.play();

    const allButtons = document.querySelectorAll('#opcoes button');
    allButtons.forEach(btn => btn.disabled = true);
    score++;
    pontuacao()
    botao.style.backgroundColor = "#4CAF50";

    const conta = document.getElementById("conta");
    conta.textContent = conta.textContent.replace("?", respostaCorreta);


    setTimeout(novaConta, 1000);


  } else {
    audioErrado.currentTime = 0; 
    audioErrado.volume = 0.5;
    audioErrado.play();
    botao.style.backgroundColor = "#f44336";
    botao.disabled = true;
    perderVida();

  }
}

let vidas = 5;
let score = 0;

function perderVida() {
  const coracoes = document.querySelectorAll(".coracao:not(.perdida)");
  if (coracoes.length > 0) {
    const ultimo = coracoes[coracoes.length - 1];
    ultimo.classList.add("perdida");
    vidas--;

    if (vidas <= 0) {
      setTimeout(() => {
        alert("Suas vidas acabaram! Reiniciando o jogo.");
        reiniciarJogo();
      }, 500);
    }
  }
}

function pontuacao() {
  document.getElementById("score").textContent = `Pontuação: ${score}`;

  if (score % 10 == 0 && score != 0) {
    const dificuldade = confirm("Parabéns! Você alcançou " + score + " pontos!\nDeseja aumentar a dificuldade para MÉDIO?");
    if (dificuldade) {
      window.location.href = 'medio.html';
    }
  }
}

function reiniciarJogo() {
  vidas = 5;
  score = 0;
  pontuacao();
  const coracoes = document.querySelectorAll(".coracao");
  coracoes.forEach(coracao => coracao.classList.remove("perdida"));
  novaConta();
}
function voltarMenu() {
  const ok = confirm('Deseja voltar ao menu? Seu progresso será perdido.');
  if (ok) {
    window.location.href = '../index.html';
  }
}
novaConta();