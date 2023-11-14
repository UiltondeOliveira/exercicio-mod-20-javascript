function calculadoraMDC (numero1, numero2){
    let sobra 
    while (sobra != 0){
        sobra = numero1 % numero2
        numero1 = numero2
        numero2 = sobra 
    } 
        return numero1
}

let numero1 = 20, numero2 = 37
console.log('O MDC de '+ numero1 + ' e '+ numero2 + ' é: ' + calculadoraMDC(numero1, numero2))