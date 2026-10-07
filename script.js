:::writing{variant="document" id="74156" title="script.js"} const caixaPerguntas = document.querySelector(".caixa-perguntas"); const caixaAlternativas = document.querySelector(".caixa-alternativas"); const caixaResultado = document.querySelector(".caixa-resultado"); const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [ { enunciado: "Você está fazendo um trabalho escolar e decide usar uma Inteligência Artificial para ajudar na pesquisa. Qual seria a atitude mais responsável?", alternativas: [ { texto: "Copiar tudo o que a IA escrever e entregar como se fosse meu.", afirmacao: "É importante lembrar que copiar um texto gerado por IA sem verificar ou desenvolver suas próprias ideias pode prejudicar o aprendizado." }, { texto: "Usar a IA como apoio, pesquisar outras fontes e escrever com minhas próprias palavras.", afirmacao: "Você demonstra uma postura responsável, usando a IA como ferramenta de apoio e mantendo seu próprio pensamento crítico." } ] },

{ enunciado: "A Inteligência Artificial pode apresentar informações incorretas. O que você faria ao receber uma resposta de uma IA?", alternativas: [ { texto: "Confiaria na resposta porque a IA sempre está certa.", afirmacao: "É importante ter cuidado, pois a IA pode cometer erros e apresentar informações incorretas." }, { texto: "Conferiria a informação em outras fontes confiáveis.", afirmacao: "Você demonstra pensamento crítico ao verificar as informações antes de acreditar ou utilizá-las." } ] },

{ enunciado: "Ao utilizar uma ferramenta de Inteligência Artificial, qual informação você deve evitar compartilhar?", alternativas: [ { texto: "Senhas, documentos pessoais e informações privadas.", afirmacao: "Você entende a importância da privacidade e sabe que informações pessoais e senhas devem ser protegidas." }, { texto: "Uma pergunta sobre um conteúdo que estou estudando.", afirmacao: "Fazer perguntas sobre conteúdos escolares pode ser uma forma útil de utilizar a IA como ferramenta de aprendizagem." } ] },

{ enunciado: "Qual destas situações representa melhor o uso da Inteligência Artificial na escola?", alternativas: [ { texto: "Usar a IA para tirar dúvidas, organizar ideias e estudar um conteúdo.", afirmacao: "Você percebe que a IA pode ser uma ferramenta útil para auxiliar nos estudos e facilitar o aprendizado." }, { texto: "Deixar a IA fazer todas as atividades sem tentar aprender o conteúdo.", afirmacao: "A IA não deve substituir o esforço e o aprendizado do estudante. Ela pode ajudar, mas é importante continuar pensando e aprendendo." } ] },

{ enunciado: "Depois de conhecer melhor a Inteligência Artificial, qual é a atitude mais adequada?", alternativas: [ { texto: "Usar a tecnologia sem pensar nas consequências.", afirmacao: "A tecnologia deve ser utilizada com responsabilidade, pois seu uso pode trazer benefícios, mas também exige atenção." }, { texto: "Usar a tecnologia de forma consciente, crítica e responsável.", afirmacao: "Você demonstra uma visão consciente sobre a IA, entendendo que ela pode ajudar, mas não substitui a criatividade, a análise e as decisões humanas." } ] } ];

let atual = 0; let historiaFinal = "";

function mostraPergunta() { if (atual >= perguntas.length) { mostraResultado(); return; }

const perguntaAtual = perguntas[atual];

caixaPerguntas.textContent = perguntaAtual.enunciado; caixaAlternativas.innerHTML = "";

mostraAlternativas(perguntaAtual); }

function mostraAlternativas(perguntaAtual) { for (const alternativa of perguntaAtual.alternativas) {

const botaoAlternativa = document.createElement("button");

botaoAlternativa.textContent = alternativa.texto;

botaoAlternativa.addEventListener("click", () => { respostaSelecionada(alternativa); });

caixaAlternativas.appendChild(botaoAlternativa); } }

function respostaSelecionada(opcaoSelecionada) {

historiaFinal += opcaoSelecionada.afirmacao + " ";

atual++;

mostraPergunta(); }

function mostraResultado() {

caixaPerguntas.textContent = "O que podemos refletir sobre suas respostas?";

textoResultado.innerHTML = historiaFinal + "<br><br><strong>Conclusão:</strong> " + "A Inteligência Artificial pode ser uma ferramenta muito útil na escola, " + "mas seu uso precisa ser acompanhado de responsabilidade e pensamento crítico. " + "É importante verificar as informações, proteger os dados pessoais, evitar o plágio " + "e utilizar a tecnologia para aprender, e não para substituir o nosso próprio raciocínio.";

caixaAlternativas.innerHTML = ""; }

mostraPergunta(); :::