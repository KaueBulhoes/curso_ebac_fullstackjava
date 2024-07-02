function multiplicacao(a: number, b: number): number {
    return a * b;
}

function saudacao(name: string): string {
    return "Olá " + name;
}

const resultMultiplication = multiplicacao(3, 4);
console.log(`Resultado da multiplicação: ${resultMultiplication}`);

const saudacaoing = saudacao("Maria");
console.log(saudacaoing);
