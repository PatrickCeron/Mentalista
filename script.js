var botaoRestart = window.document.getElementById('botao2');
botaoRestart.addEventListener('click',restart);

var botao = window.document.getElementById('botao');
botao.addEventListener('click',chutar);

window.document.getElementById('logo').style.display = "block";

window.document.getElementById('botao2').disabled = true;

var numero = Number(window.document.getElementById('numero').value);
var secreto = parseInt(Math.random()*11);
var tentativa = 3;

function restart(){
    secreto = parseInt(Math.random()*11);
    window.document.getElementById('tentativa').innerHTML = 'Jogo reiniciado, você tem 3 tentativas!';
    window.document.getElementById('dica').innerHTML = ""
    window.document.getElementById('resultado').innerHTML = ""
    tentativa = 3;
    window.document.getElementById('botao').disabled = false;
    window.document.getElementById('botao2').disabled = true;
}

function chutar() {
    window.document.getElementById('logo').style.display = "none";
    window.document.getElementById('botao2').disabled = true;
    var numero = Number(window.document.getElementById('numero').value);
    varificaResultado(numero);

    function varificaResultado(numero) {
        if(numero==secreto){
            resultado.innerHTML = `Parabéns, Você acertou, o número secreto é ${secreto}`
            window.document.getElementById('tentativa').innerHTML = ""
            window.document.getElementById('dica').innerHTML = ""
            window.document.getElementById('botao2').disabled = false;
            window.document.getElementById('botao').disabled = true;
        }
        else if(numero>10||numero<0){
            alert('Atenção! número Invalido')
        }
        else if(numero < secreto & tentativa >1){
            --tentativa;
            window.document.getElementById('resultado').innerHTML = 'Você errou, tente novamente!'
            window.document.getElementById('dica').innerHTML = 'Dica: número secreto é maior!'
            window.document.getElementById('tentativa').innerHTML = `Você tem mais ${tentativa} tentativas`        
        }
        else if(numero > secreto & tentativa >1){
            --tentativa;
            window.document.getElementById('resultado').innerHTML = 'Você errou, tente novamente!'
            window.document.getElementById('dica').innerHTML = 'Dica: número secreto é menor!'
            window.document.getElementById('tentativa').innerHTML = `Você tem mais ${tentativa} tentativas!` 
        }
        else {
            window.document.getElementById('tentativa').innerHTML = 'Suas tentativas acabaram!☠️'
            window.document.getElementById('dica').innerHTML = ""
            window.document.getElementById('resultado').innerHTML = ""
            window.document.getElementById('botao2').disabled = false;
            window.document.getElementById('botao').disabled = true;
        }
    }
}