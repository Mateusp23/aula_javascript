
/*var nome = " mateus paulart";
var idade = 18;
var idade2 = 10;
var frase = "mateus é massa";
//alert(nome + " tem " + idade + "anos");
console.log(nome);
console.log(idade + idade2);
console.log(frase.toLocaleUpperCase());*/

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join("/"));
//alert(lista[1]);

/*var fruta = { nome: "maça", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/

//var fruta = [{ nome: "maça", cor: "vermelha"}, {nome:"uva", cor: "roxa"}]
///console.log(fruta);
//alert(fruta[1].nome);

/*var idade =prompt("qual sua idade?");
var idade = 18;
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}*/

/*var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count = count +1;
}*/

/*var count;
for(count=0;count<=5; count ++){
    alert(count);
}*/

/*var d = new Date();
alert(d.getDay());
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getHours());*/

/*function soma(n1,n2) {
    return n1 + n2;
}
function setReplace(frase,nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}
alert(setReplace("vai japao", "japao", "Brasil"));
alert(soma(5,10));*/

/*function validaidade(idade) {
    var validar;
    if (idade >=18) {
        validar = true;
    }else{
        validar =false;
    }
    return validar;
}
var idade = prompt(" qual sua idade?");
console.log(validaidade(idade));*/

/*function botao(){
    //alert("obrigado por clicar!!");
    document.getElementById("obrigado").innerHTML = "<b>obrigado por clicar</b>";
    //console.log(document.getElementById("obrigado"));
}

function redirecionar() {
    //window.open("https://gremio.net/"); outra aba
    //window.location.href = "https://gremio.net/"; mesma aba
}*/

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = " obrigado por passar o mouse";
    elemento.innerHTML = "obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "passe o mouse aqui";
    elemento.innerHTML = "passe o mouse aqui";
}

function load() {
    alert("pg carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}
