
for (let pokemon2 = 10; pokemon2 >= 0; pokemon2 --){
    console.log(pokemon2);
}

teste golpes pokemon

let move = prompt("earthQuake: ").toLocaleLowerCase();


if (move === "earthQuake") {
    console.log("marshtomp use : " + move);
}

else if (move === "shadowPunch") {
    console.log("gliscor use : " + move);
}

else {
   console.log("golpe inválido!");
}