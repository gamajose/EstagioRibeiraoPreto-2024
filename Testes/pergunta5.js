// 5) Escreva um programa que inverta os caracteres de um string.


// IMPORTANTE:

// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

// b) Evite usar funções prontas, como, por exemplo, reverse;


function inverterString(original) {
    let invertida = '';
    for (let i = original.length - 1; i >= 0; i--) {
        invertida += original[i];
    }
    return invertida;
}

const stringExemplo = "Test para vaga de estágio, Ribeirão Preto - 2024 ";

const stringInvertida = inverterString(stringExemplo);

console.log("String original:", stringExemplo);
console.log("String invertida:", stringInvertida);
