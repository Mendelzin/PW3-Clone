function verificarLogin(){
    let login = document.getElementById("login").value; 
    let senha = document.getElementById("senha").value;

    if(login === "Rock123" && senha === "666"){
        alert("Seja bem vindo(a) ");
        window.location.href="algumacoisa.html";
    }else{
        alert("Login ou senha incorretos.")
    }
    
    login = document.getElementById("login").value = "";
    senha = document.getElementById("senha").value = "";

}
