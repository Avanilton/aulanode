let alunos = ["Pedro", "Ana", "João", 123];
alunos.push("Mário");
alunos[3] = "Maria";

let ini = 0;
let fim = alunos.length - 1;

while (ini <= fim) {
    console.log(alunos[ini]);
    ini = ini + 1;
}

let inir = alunos.length - 1;
let fimr = 0;

while (inir >= fimr) {
    console.log(alunos[inir]);
    inir = inir - 1;
}


//Ordenação

alunos.sort();
let fimf = alunos.length - 1;

for (let ini = 0; ini <= fimf; ini = ini + 1) {
    console.log(alunos[ini])
}

//forEach

alunos.forEach(function(item){
    console.log(item);
})