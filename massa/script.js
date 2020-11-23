function calcular() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var imc
    var result

    imc = altura * altura
    result = peso / imc

    if (result < 18.5) {
        document.getElementById('resultados').innerHTML = 'Seu tipo de massa é: Abaixo do peso ideal ' + result.toFixed(1)
    }

    if (result >= 18.5 && result <= 25) {
        document.getElementById('resultados').innerHTML = 'Seu tipo de massa é: Peso ideal ' + result.toFixed(1)
    }

    if (result > 25 && result <= 30) {
        document.getElementById('resultados').innerHTML = 'Seu tipo de massa é: Acima do peso ideal ' + result.toFixed(1)       
    }

    if (result > 30) {
        document.getElementById('resultados').innerHTML = 'Seu tipo de massa é: obeso ' + result.toFixed(1)
    }
}