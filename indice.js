

function indiceMaiorNumero(array) {
  let max = Math.max(...array)
  let indiceMax = array.indexOf(max)
  return indiceMax
}

function indiceMenorNumero(array) {
    let min = Math.min(...array)
    let indiceMin = array.indexOf(min)
    return indiceMin
  }

let numeros = [5, 100, 50, 8, 3, 12, 20, 4, 109]

const indiceMaior = indiceMaiorNumero(numeros)
//console.log("O índice do maior número é: "+ indiceMaior)

const indiceMenor = indiceMenorNumero(numeros)
//console.log("O índice do menor número é: "+ indiceMenor)

module.exports = { indiceMaior, indiceMenor }