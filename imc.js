let peso = 70.00
let altura = 1.53

let divisao = peso / altura ** 2

console.log("imc = : " + divisao.toFixed(2));

if (divisao <= 18.4) {
    console.log("você está abaixo do peso normal " );
}

else if(divisao >= 18.5 && divisao <= 24.99) {
    console.log("você está no peso normal ");
}

else if (divisao >= 25.0 && divisao <= 29.99) {
     console.log("você tem excesso de peso");
}

else if (divisao >= 30.0 && divisao <= 34.99) {
    console.log("você tem obesidade classe 1");
}

else if (divisao >= 35.0 && divisao <= 39.99) {
    console.log("você tem obesidade classe 2");
}

else if ( divisao >= 40) {
    console.log("você tem obesidade classe 3");
}
