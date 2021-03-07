var valorDaHora = document.querySelector("#valor-hora")

var inputHorasPorDia = document.querySelector("#horas-projeto")

var spanValorDoProjeto = document.querySelector("#resposta")

function calcular() {

    var valorDoProjeto = (valorDaHora.valueAsNumber * inputHorasPorDia.valueAsNumber).toFixed(2)

    spanValorDoProjeto.innerHTML = "Valor do Projeto é R$ " + valorDoProjeto
}