//referencia as tag do html
const inpLetra = document.getElementById("inpLetra");
const btnJogar = document.getElementById("btnJogar");
const saidaP = document.getElementById("saidaP");
const letrasErro = document.getElementById("letrasErro");
const tentativa = document.getElementById("tentativa");
const inputAdivinhar = document.getElementById("inputAdivinhar");
const btnAdivinhar = document.getElementById("btnAdivinhar");

//lista de palavras
const ListaDePalavras = ["celular", "telefone", "carro", "tomate", "Lua", "caneta", "felicidade", "montanha", "brisa", "guitarra", "chocolate", "amizade",
    "arco-íris", "relógio", "espiral", "macarrão", "jornal", "diamante", "abacaxi", "farol", "vinho", "tesouro", "selva", "xícara"];

//sorteia uma palavra
let n = parseInt(Math.random() * ListaDePalavras.length);
let palavra = ListaDePalavras[n];


//array de controle
let letras = [];
let letrasForme = [];
let letrasDigitadas = [];

//quebra a palavras em letas
for (i = 0; i < palavra.length; i++) {
    letras[i] = palavra.charAt(i);
    letrasForme[i] = "_";
}

letrasForme[0] = palavra.charAt(0);
//mostra a quantidade de letras
saidaP.innerText = letrasForme;

//Chama as funcoes ao apertar o botao
let tentativas = 0
btnJogar.addEventListener("click", () => {
    if (inpLetra.value == "") {
        alert("Digite uma letra");
    } else if (tentativas < 10) {
        tentativa.innerText = "Tentativas: " + (tentativas + 1) + "/10";
        verificacao(inpLetra.value);
        retorno();
        tentativas += 1;

    } else {
        tentativa.innerText = "Voce Perdeu";
        saidaP.innerText = palavra;
    }
    inpLetra.value = ""
});

//retorna os valores do array
let cont = 0;
function retorno() {
    saidaP.innerText = letrasForme;
    letrasDigitadas[cont] = inpLetra.value.charAt(0);
    letrasErro.innerText = letrasDigitadas;
    cont += 1;
}


//verifica se a letra digitada esta na palavra
function verificacao(letra) {
    for (i = 1; i < palavra.length; i++) {
        if (letra == letras[i]) {
            letrasForme[i] = letra;
        }
    }
}

//botão verifica se o jogador acetou
btnAdivinhar.addEventListener("click", () => {
    if (inpLetra.value == "") {
        alert("Digite uma Palavra");
    } else if (inputAdivinhar.value == palavra) {
        tentativa.innerText = "Parabem voce ganhou!";
    } else {
        tentativa.innerText = "Voce errou!";
    }

    inputAdivinhar.value = "";
})

