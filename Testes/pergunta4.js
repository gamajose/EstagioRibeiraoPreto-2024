// 4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas 
// da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

// Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

function primeiraVisita(interruptores) {
    interruptores[0] = true;
    interruptores[0] = false;
    interruptores[1] = true;
}

function segundaVisita(interruptores) {
    const primeiraLampada = interruptores[0];
    const segundaLampada = interruptores[1];
    const terceiraLampada = interruptores[2];

    if (primeiraLampada && segundaLampada) {
        console.log("O primeiro interruptor controla a primeira lâmpada, o segundo controla a segunda lâmpada, e o terceiro controla a terceira lâmpada.");
    } else if (primeiraLampada) {
        console.log("O primeiro interruptor controla a primeira lâmpada, e o segundo controla a terceira lâmpada.");
    } else if (segundaLampada) {
        console.log("O segundo interruptor controla a segunda lâmpada, e o terceiro controla a terceira lâmpada.");
    } else {
        console.log("O terceiro interruptor controla a terceira lâmpada.");
    }
}

const interruptores = [false, false, false];

primeiraVisita(interruptores);
segundaVisita(interruptores);
