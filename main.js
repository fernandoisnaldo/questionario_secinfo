let pontuacao, contador;
let formulario = document.getElementById("questionario");
let perguntas = [
    {
        pergunta: "Você atualiza seus sistemas operacionais e todos os programas regularmente?",
        respostas: ["Sim", "Não"],
        pontos: [10, -10],
    },
    {
        pergunta: "Você configura o seu firewall?",
        respostas: ["Sim", "Só habilito", "Não"],
        pontos: [10, 5, -10],
    },
];

function inicio() {
    formulario.innerHTML = "";
    contador = 0;
    pontuacao = 0;
    pergunta();
}

function pergunta() {
    if (contador < perguntas.length) {
        formulario.innerHTML = "";
        let perguntaAtual = perguntas[contador];
        let perguntaElement = document.createElement("h3");
        perguntaElement.textContent = perguntaAtual.pergunta;
        formulario.appendChild(perguntaElement);

        perguntaAtual.respostas.forEach((resposta, index) => {
            let respostaElement = document.createElement("button");
            respostaElement.textContent = resposta;
            respostaElement.addEventListener("click", () => responder(perguntaAtual.pontos[index]));
            formulario.appendChild(respostaElement);
        });
    } else {
        // Fim do questionário, exibir pontuação final
        formulario.innerHTML = "Pontuação final: " + pontuacao;
    }
}

function responder(pontos) {
    pontuacao += pontos;
    contador++;
    pergunta();
}
