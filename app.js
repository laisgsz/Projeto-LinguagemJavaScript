//let titulo = document.querySelector('h1'); // peguei o elemento h1 que esta no html e coloquei em uma variavel chamada titulo
//titulo.innerHTML = 'Jogo do numero secreto'; // alterei o texto

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';

function gerarNumeroAleatorio() { // funcao sem parametro mas com retorno de um numero entre 1 e 10

    
    let listadeNumerosSorteados = []; //variavel para armazenar numeros aleatorios
    let numeroEscolhido =  parseInt(Math.random() * 10 + 1); // gerar um numero aleatorio entre 1 e 10

    
}

let numeroSecreto = gerarNumeroAleatorio(); // o retorno da funcao sera armazenado na variavel numero secreto
let tent = 1;

function exibirTextonaTela(tag, texto){ // funcao e parametros
let campo = document.querySelector(tag); // indo no html e encontrando uma tag (que começa com <), vai armazenar na variavel campo
campo.innerHTML = texto; // quando ele encontrar essa tag, armazenar na variavel campo, campo vai ser igual a texto, que e o q vamos digitar para preencher esse campo
}

function exibirMsgInicial(){
exibirTextonaTela('h1','Jogo do numero secreto'); // funçao, encontrou a tag h1, escreve Jogo do numero secreto
exibirTextonaTela('p','Escolha um numero entre 1 e 10'); // funcao, encontrou a tag p, escreve Escolha um numero entre 1 e 10
}
exibirMsgInicial();

function verificarChute() { // função vazia, nesse caso VerificarChute tambem esta no html, usada para verificar interaçao com botao
    //console.log(numeroSecreto); // sera exibido no console o numero secreto cada vez q houver interação
    let chute = document.querySelector('input').value; //boolean é verdadeio ou falso 0 ou 1

    if (chute > numeroSecreto){
    exibirTextonaTela('h1', 'O numero secreto e menor');
    exibirTextonaTela('p', 'Tente novamente' );
    tent= tent + 1;
    limparCampo();
 
    } else if ( chute < numeroSecreto){
    exibirTextonaTela('h1', 'O numero secreto e maior');
    exibirTextonaTela('p', 'Tente Novamente');
    tent = tent + 1;
    limparCampo();

    } else {
        let palavratentativa = tent > 1 ? 'Tentativas': 'Tentativa';
        let mensagemtent = `Voce descobriu o numero secreto com ${tent}, ${palavratentativa}`;
        exibirTextonaTela('h1', 'Voce acertou');
        exibirTextonaTela('p', `${mensagemtent}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); 

    }
    }
    function limparCampo(){ // funcao limpar campo todas as vezes que o usuario errar o numero secreto
        chute = document.querySelector('input');
        chute.value = '';
        }
    
        function reiniciarJogo(){
            numeroSecreto = gerarNumeroAleatorio();
            limparCampo();
            tent = 1;
           exibirMsgInicial();
           document.getElementById('reiniciar').setAttribute('disabled', true);


        
    
        // linguagens[linguagens.length - 1]; acessar phyton, acessa o ultimo elemento da lista


