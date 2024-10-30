let pes = JSON.parse(localStorage.getItem("pessoa"));
document.getElementById("nmPerfil").innerHTML = pes[0].login;

const custom = document.getElementById("customizar");

function aparecerCadastro(){
    var divCad = document.getElementById("areaCadastro");
    let divConteudo = document.getElementById("conteudo");
  
    if(divCad.style.display === 'none'){
        divCad.style.display = 'block';
        divConteudo.style.display = 'none';

    } else{
        divCad.style.display = 'none';
        divConteudo.style.display = 'block';
    }
}
function alterarStyle(){

    if(custom.value == 'custom'){
        window.location.href = 'pagina4.html';

    } else if (custom.value == 'normal'){
        window.location.href = 'pagina3.html';
    }
}
