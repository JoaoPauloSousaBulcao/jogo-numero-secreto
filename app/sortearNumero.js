
// const numero = parseInt(Math.random() * 101)


// console.log(numero)

const menorValor = 1
const maiorValor = 100


const numeroSecreto = gerarNumeroAleatorio()


function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + menorValor)
}

console.log("Numero secreto: " + numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor

