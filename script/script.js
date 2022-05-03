/*CARNE -> 400 GRAMAS POR PESSOA    +6 HORAS = 650 GRAMAS
  FRANGO - > 250 GRAMAS POR PESSOA  +6 HORAS = 400 GRAMAS
  LINGUIÇA -> 200 GRAMAS POR PESSOA +6 HORAS = 300 GRAMAS
  CERVEJA -> 1200ML POR PESSOA      +6 HORAS = 2000ML
  REFRI -> 1000ML POR PESSAOA       +6 HORAS = 1500ML

CRIANÇAS = 0,5 DE UM ADULTO
*/

var duration = document.getElementById("duracao");

function validar(){
    let checkCarne = document.getElementById("checkCarne");
    let checkFrango = document.getElementById("checkFrango");
    let checkLinguica = document.getElementById("checkLinguica");

    if(checkCarne.checked && checkFrango.checked && checkLinguica.checked ){
        if(!confirm("Você escolheu Carne, Frango e Linguiça?")){
            document.location.reload(true);
        }
    }else if(checkCarne.checked && checkFrango.checked){
        if(!confirm("Você escolheu Carne e Frango?")){
            document.location.reload(true);
        }
    }else if(checkCarne.checked && checkLinguica.checked){
        if(!confirm("Você escolheu Carne e Linguiça?")){
            document.location.reload(true);
        }
    }else if(checkFrango.checked && checkLinguica.checked){
        if(!confirm("Você escolheu Frango e Linguiça?")){
            document.location.reload(true);
        }
    }else if(checkCarne.checked){
        if(!confirm("Você escolheu somente Carne?")){
            document.location.reload(true);
        }
    }else if(checkFrango.checked){
        if(!confirm("Você escolheu somente Frango?")){
            document.location.reload(true);
        }
    }else if(checkLinguica.checked){
        if(!confirm("Você escolheu somente Frango?")){
            document.location.reload(true);
        }
    }else{
        alert("Você não escolheu nenhum tipo de carne!");
        document.location.reload(true);
    }
}

    function mostrar(){
    let postCheck = document.getElementById("postCheck")
    let indicador = document.getElementById("indicador");
    let botao = document.getElementById("botao");
    let check = document.getElementById("check");
    let botao2 = document.getElementById("botao2");
    indicador.innerText = "Segundo Passo: Forneça os dados para planejarmos seu churrasco!";
    botao.style.display = "none";
    check.style.display = "none";
    botao2.style.display = "block";
    if(postCheck.style.display == "" || postCheck.style.display == "none"){
        postCheck.style.display = "block";
    }else{
        postCheck.style.display = "none";
    }
}

function calculoCarne(){
    let inputAdultos = document.getElementById("qtdAdultos");
    let inputCrianca = document.getElementById("qtdCrianca");
    let qtdAdultos = inputAdultos.value;
    let qtdCrianca = inputCrianca.value;
    if( duration.value >= 6){
        return qtdAdultos*650 + qtdCrianca*325;
    }else{
        return qtdAdultos*400 + qtdCrianca*200;
    }


}
function calculoFrango(){
    let inputAdultos = document.getElementById("qtdAdultos");
    let inputCrianca = document.getElementById("qtdCrianca");
    let qtdAdultos = inputAdultos.value;
    let qtdCrianca = inputCrianca.value;

    if(duration.value >= 6){
        return qtdAdultos*400 + qtdCrianca*200;
    }else{
        return qtdAdultos*250 + qtdCrianca*125;
    }
}

function calculoLinguica(){
    let inputAdultos = document.getElementById("qtdAdultos");
    let inputCrianca = document.getElementById("qtdCrianca");
    let qtdAdultos = inputAdultos.value;
    let qtdCrianca = inputCrianca.value;

    if(duration.value >= 6){
        return qtdAdultos*300 + qtdCrianca*150;
    }else{
        return qtdAdultos*200 + qtdCrianca*100;
    }
}

function calculoCerveja(){
    let inputAdultos = document.getElementById("qtdAdultos");
    let qtdAdultos = inputAdultos.value;

    if(duration.value >= 6){
        return qtdAdultos*2000;
    }else{
        return qtdAdultos*1200;
    }
}

function calculoRefri(){
    let inputAdultos = document.getElementById("qtdAdultos");
    let inputCrianca = document.getElementById("qtdCrianca");
    let qtdAdultos = inputAdultos.value;
    let qtdCrianca = inputCrianca.value;

    if(duration.value >= 6){
        return qtdAdultos*1500 + qtdCrianca*750;
    }else{
        return qtdAdultos*1000 + qtdCrianca*500;
    }
}

function calculoFinal(){
    let resultado = document.getElementById("resultado");

    if(checkCarne.checked == true){
        resultado.innerHTML += "<p>" + calculoCarne()/1000 + " Quilogramas de Carne </p>";
    }
    if(checkFrango.checked == true){
        resultado.innerHTML += "<p>" + calculoFrango()/1000 + " Quilogramas de Frango </p>";
    }
    if(checkLinguica.checked == true){
        resultado.innerHTML += "<p>" + calculoLinguica()/1000 + " Quilogramas de Linguiça</p>";
    }
    resultado.innerHTML += "<p>" + Math.ceil(calculoCerveja()/350) + " Latas de 350ml de Cerveja";
    resultado.innerHTML += "<p>" + Math.ceil(calculoRefri()/2000) + " Garrafas de 2L de Refrigerante";
}

function postCalculo(){
    let voltar = document.getElementById("botao3");
    botao2.style.display = "none";
    indicador.innerHTML = "Aqui está o resultado do seu churrasco!";
    postCheck.style.display ="none";
    voltar.style.display = "block";
}

function voltar(){
    document.location.reload(true);

}



