// Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



// IMPORTANTE:

// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarFibonacci(numero) {
    let a = 0;
    let b = 1;
    while (b < numero) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b === numero;
}

rl.question("Informe um número: ", function (numeroInformado) {
    numeroInformado = parseInt(numeroInformado);
    let fibonacci = [0,1];
    let i = 2;
    while (fibonacci[i - 1] < numeroInformado) {
        fibonacci[i] = fibonacci [ i - 1] + fibonacci [ i - 2];
        i++;
    }


    if (fibonacci.includes(numeroInformado)) {
        console.log(`O número ${numeroInformado} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${numeroInformado} não pertence à sequência de Fibonacci.`);
    }
    rl.close();
});