function calculadora() {
    var numero1 = Number(document.getElementById('num1').value)
    var numero2 = Number(document.getElementById('num2').value)
    var operacao = document.getElementById('operacao').value
    var resultado 

    switch (operacao) {
        case '+':
            resultado = numero1 + numero2
            break;
        case '-':
            resultado = numero1 - numero2
            break;
        case '*':
            resultado = numero1 * numero2
        break;
    
        case '/':
            resultado = numero1 / numero2
        break;
    }

    document.getElementById('resultado1').innerHTML = 'o resultado é: ' + resultado
}

function calcule(){
    var valor = document.getElementById('valor').value
    var kwh = document.getElementById('kwh').value
    var res

    res = kwh * valor
    if(kwh >= 100 && kwh<200){
        res= res * 1.25
    }
    if(kwh >= 200){
        res= res * 1.5
    }

    document.getElementById('res2').innerHTML = 'valor a ser pago:' + res
}

function verificaMaior() {
    var numeros = document.getElementById('numeros').value
    numeros = numeros.split(',')
    var i
    var maior = 0
    for (i = 0; i < numeros.length; i++) {
        numeros[i]= parseFloat(numeros[i])
        if (maior < numeros[i]) {
            maior = numeros[i]
        }   
    }
    document.getElementById('resultado2').innerHTML = 'o maior numero: ' + maior    
}

function maiorIdade() {
    var idade = document.getElementById('idade').value
    idade = idade.split(',')
    var x 
    var idadeMaior = 0
    var idadeMenor = 0
    for (x = 0; x < idade.length; x++) {
        idade[x] = parseFloat(idade[x])
        if ( idade[x] >= 18)
        idadeMaior = idadeMaior+1

        else {
            idadeMenor = idadeMenor+1
        }
    }

    document.getElementById('idade1').innerHTML = 'a maior idade: ' + idadeMaior
    document.getElementById('idade2').innerHTML = 'a menor idade: ' + idadeMenor
    
}
