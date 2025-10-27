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

      // Limpa todos os botões anteriores
      const allButtons = document.querySelectorAll('#opcoes button');
      allButtons.forEach(btn => {
        btn.style.backgroundColor = '';
        btn.disabled = false;
      });
    }

    function verificar(valor, botao) {
      

      if (valor === respostaCorreta) {
        botao.style.backgroundColor = "#4CAF50"; // Verde
        botao.style.color = "white";
        setTimeout(novaConta, 1000);
      } else {
        botao.style.backgroundColor = "#f44336"; // Vermelho
        botao.style.color = "white";
        
      }
    }

    novaConta();