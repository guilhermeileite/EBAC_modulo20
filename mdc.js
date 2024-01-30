// O MDC é o Máximo Divisor Comum
// Criaremos uma função para calcular o mdc usando o algoritmo de Euclides
function funcaomdc(a, b) {
  // No algoritmo de Euclides, os números são decompostos em fatores primos, em sucessivas divisões, até obter resto zero
  // O divisor, a que chamaremos de b, precisa ser diferente de zero, já que na matemática não há divisão por zero     
  if (b != 0)
    return funcaomdc(b, (a % b));
  else
    return a;
}
module.exports = { funcaomdc }
// Aqui testaremos dois números inteiros maiores ou iguais a zero
let numero1 = 12;
let numero2 = 30;
let mdc = funcaomdc(numero1, numero2);

console.log(`O MDC entre ${numero1} e ${numero2} é ${mdc}`);

