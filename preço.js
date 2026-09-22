preço 

let preco = 700

// se o produto custar mais de R$399, aplicamos 10% de desconto
// se o produto custar mais de R$699, aplicamos 10 % de desconto e o cliente tem frete grátis

// a ordem dos fatores altera o resultado, por exemplo, se não delitarmos que o desconto de 10%, só é aplicado entre R$400 a R$699, o computador aplica apenas 10%, nunca os 20%.

// se o preço maior que 399 e o preço menor ou 699
if (preco > 399 && preco <= 699){
    console.log("você recebeu 10% de desconto");
}
else if (preco > 699){
    console.log("você recebeu 20% de desconto e frete grátis");    
}
else{
    console.log("você não recebeu desconto");