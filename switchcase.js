switch case


let precoManga = 5.45
let precoBanana = 16.79
let precoMorango = 20
let precoGranola = 34
let precoMaracuja = 3.45

let frutaEscolhida = "pitaya"


switch (frutaEscolhida) {
    case "maracuja": 
        console.log(`o maracujá custa R$${precoMaracuja}`);
        break;

        case "banana": 
        console.log(`a banana custa R$${precoBanana}`);
        break;

        case "morango": 
        console.log(`o morango custa R$${precoMorango}`);
        break;

    default:
        console.log(`você inseriu "${frutaEscolhida}". Isso não é uma fruta válida`);
        break;
}

com texto let precoManga = 5.45
let precoBanana = 16.79
let precoMorango = 20
let precoGranola = 34
let precoMaracuja = 3.45

let frutaEscolhida = "pitaya"

// o switch Case é uma estrutura de decisão, assim como o if else.
// Seu funcionamento se dá na simplicidade, onde recebemos um valor
// como chave, e dependendo se esse valor está completando em um dos 
// Case executamos um código específico
// no exemplo abaixo, passamos a variável frutaEscolhida como chave, e
// caso você coloque "maracujá" nessa variável, o programa escreverá : o maracujá
// custa R$${preçoMaracuja na tela
// assim como o else, temos o default que será executadp quando o valor
// da chave não estiver presente em nenhum dos cases.

switch (frutaEscolhida) {
    case "maracuja": 
        console.log(`o maracujá custa R$${precoMaracuja}`);
        break;

        case "banana": 
        console.log(`a banana custa R$${precoBanana}`);
        break;

        case "morango": 
        console.log(`o morango custa R$${precoMorango}`);
        break;

    default:
        console.log(`você inseriu "${frutaEscolhida}". Isso não é uma fruta válida`);
        break;
}
