

function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute
    if(chuteForInvalido(numero)){
        elementoChute.innerHTML +=('<div>Valor invalido</div>')
    }
    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML +=(`<div>Valor invalido, fale um número entre ${menorValor} e ${maiorValor}. </div>`)
    }

    else if(numero<numeroSecreto){
        elementoChute.innerHTML += (`<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div`)
        
    }

    else if(numero>numeroSecreto){
        elementoChute.innerHTML += (`<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div`)
        
    }
    
    else if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era: </h3>
            <h1>${numeroSecreto}</h1>
            <button id="jogar-novamente" class="btn-play-again"">JOGAR NOVAMENTE</button>
        `
    }
}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}



function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})