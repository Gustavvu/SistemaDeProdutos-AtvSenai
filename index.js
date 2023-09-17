var peças = 0
var saldo = 0
var laçoDeRepetição = true
while(laçoDeRepetição){
    var resposta = window.prompt(`Sistema de peças / 1-Entrada / 2-Saida / 3-Sair                         | saldo: ${saldo}`)
  
    switch(resposta){
        case "1":
            var registro = Number.parseInt(prompt("Quantas peças serão registradas?"))
            saldo = saldo + registro
            break;
        case "2":
            var vendas = prompt("Quantas peças serão vendidas?")
            if(vendas > saldo){
                alert("Numero do estoque insuficiente")
            }else{
                saldo = saldo - vendas
            }
            break;
        case "3":
            alert("3- Sistema fechado com sucesso!")
            laçoDeRepetição = false
            break;
        default:
            alert("algo deu errado")
            break;
    }
}
