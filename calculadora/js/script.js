var inputGanhoPorMes = document.querySelector("#ganho-mes")

var inputHorasPorDia = document.querySelector("#horas-dia")

var spanHora = document.querySelector("#resposta")

function calcularValorHora() {
    // 22 são os dias úteis no mês 
    var qtdDeHorasMes = inputHorasPorDia.valueAsNumber * 22

    //EXEMPLO: sem toFixed = R$ 20,789
    //EXEMPLO: com ToFixed = R$ 20,79

    //Aqui eu  atribui uma variável para o calculo de quando ganha por hora
    var valorDaHora = (inputGanhoPorMes.valueAsNumber / qtdDeHorasMes).toFixed(2)
    
    
    //innerHTML insere o que vc quer dentro do HTML da página
    //textContent pega o valor do html que vc quer
    //Aqui eu peguei o local onde a resposta está, que é o spanHora, e atribui
    //o resultado que é "R$" + valorDaHora
    spanHora.innerHTML = "R$" + valorDaHora
}
