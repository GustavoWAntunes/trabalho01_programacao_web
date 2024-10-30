function aparecerLogin(){
  let divLogin = document.getElementById("areaLogin");
  let divConteudo = document.getElementById("conteudo");

  if(divLogin.style.display === 'none'){
    divLogin.style.display = 'block';
    divConteudo.style.display = 'none';
  } else{
    divLogin.style.display = 'none';
    divConteudo.style.display = 'block';
  }
}
function autenticar() {
  let login = document.getElementById("login").value;
  let senha = document.getElementById("senha").value;

  if (login.replaceAll(" ", "") == "" || senha.replaceAll(" ", "") == "") {
    alert('Informe os dados de autenticação');
  } else {
    localStorage.setItem("login", login.trim());
    localStorage.setItem("senha", senha.trim());

    localStorage.setItem("pessoa", '[{"login": "' + login.trim() + '", "senha": "' + senha.trim() + '"}]');

    const novaPagina = 'pagina3.html';
    window.location.href = novaPagina;
  }
}

