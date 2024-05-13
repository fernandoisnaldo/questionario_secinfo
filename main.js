let pontuacao,contador;
let formulario = document.getElementById("questionario");
let perguntas = [
    {
      pergunta: "Você atualiza seus sistemas operacionais e todos os programas regularmente?",
      respostas: ["Sim","Não"],
      pontos: [10, -10],
    },
    {
      pergunta: "Você configura o seu firewall?",
      respostas: ["Sim", "Só habilito","Não"],
      pontos: [10, 0, -10],
    },
];
function inicio(){
  formulario.innerHTML = "";
  contador=0;
  contador=0;
  pergunta();
}
function pergunta(){
    //TODO substituir o formulário por conteúdo do vetor e botão responder
    contador++;
}
function responder(){
    //TODO ação do botão responder
}
