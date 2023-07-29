//Escolha do Usuário
function escolhaPlayer(escolha){
    const opcoes = ['Pedra', 'Papel', 'Tesoura']
    const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)]
    const resultado = verificarVencedor(escolha, escolhaComputador)

    document.getElementById('result').innerHTML = `Você escolheu: ${escolha} </br> o Computador escolheu: ${escolhaComputador}. </br> </br> ${resultado}`
}
//Verificação de escolhas entre o Computador e o Player
function verificarVencedor(escolhaPlayer, escolhaComputador){
    //Empate
    if (escolhaComputador === escolhaPlayer){
        return "Empate!"
    } else if(
        //Criando formas de vencer
        (escolhaPlayer === 'Pedra' && escolhaComputador === 'Tesoura') || 
        (escolhaPlayer === 'Tesoura' && escolhaComputador === 'Papel') || 
        (escolhaPlayer === 'Papel' && escolhaComputador === 'Pedra')
        ){
            return "Você venceu!"
        } else{
            return "Você perdeu 😢"
        }
    }
 