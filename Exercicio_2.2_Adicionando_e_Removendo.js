
// Atividade Prática 2: Manipulação de Arrays (45 min)

// Exercício 2.2: Adicionando e Removendo

let numeros = [10, 20, 30];

// Adicione 40 no final
numeros.push(40);

// Adicione 5 no início
numeros.unshift(5);

// Remova o último elemento
let ultimo = numeros.pop();

// Remova o primeiro elemento
let primeiro = numeros.shift();

console.log("\n Exercício 2.2: Adicionando e RemovendoArray final: \n");
console.log("Array final:", numeros);
console.log("Removido do final:", ultimo);
console.log("Removido do início:", primeiro);