
//let dolar = 5.3
//let euro = 6.0

let botao = document.getElementById("botao")
let inputMoedas = document.getElementById("input-moedas")
let select = document.getElementById("select-moedas")


async function converterMoedas() {

let moedas = await fetch ('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL').then( function (resposta){
   return resposta.json()

    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high

    console.log(dolar)
    console.log(euro)


    let inputValorEmReal = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let inputReals = document.getElementById("input-reals")

    if (select.value === "US$ Dólar Americano") {
        let valorEmDolares = inputValorEmReal / dolar
        inputMoedas.innerHTML = valorEmDolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }


    if (select.value === "€ Euro") {

        let valorEmEuros = inputValorEmReal / euro
        inputMoedas.innerHTML = valorEmEuros.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
    }


    inputReals.innerHTML = inputValorEmReal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}


function trocaDeMoeda() {
    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")



    if (select.value === "US$ Dólar Americano") {
        console.log("Dolar")
        textoMoedas.innerHTML = "US$ Dólar Americanor"
        bandeiraMoedas.src = "./Imagens/estados-unidos.png"
    }

    if (select.value === "€ Euro") {
        console.log("Euro")
        textoMoedas.innerHTML = "Euro"
        bandeiraMoedas.src = "./Imagens/Euro.png"
    }

    converterMoedas()

}




botao.addEventListener("click", converterMoedas)
select.addEventListener("change", trocaDeMoeda)

