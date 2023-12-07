function somaDeMultiplos(num1, num2) {
    let soma = 0

    for (let i = 1; i < 1000; i++) {
      if (i % num1 === 0 || i % num2 === 0) {
        soma += i
      }
    }  
    return soma
  }

/*   let num1 = 5, num2 = 7
  const soma = somaDeMultiplos(num1, num2)
  console.log("A soma dos múltiplos de " + num1 + " ou " + num2 + " abaixo de 1000 é: " + soma) */

  module.exports = { somaDeMultiplos }