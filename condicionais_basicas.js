
// Atividade Prática 1: Primeiros Códigos (30 min)
// Exercício 1.3: Condicionais Básicas

// Complete a função que verifica se um número é par ou ímpar

function verificarParImpar(numero) {
    if (numero%2 ==0){
        return "par";
    } else {
        return "ímpar";
    }
}

// Teste a função

console.log("\n ");
console.log(verificarParImpar(8));  // deve retornar "par"
console.log(verificarParImpar(7));  // deve retornar "ímpar"