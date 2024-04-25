function validalogin(){
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if(!email || !senha){
        alert("Campos de preenchimento obrigatório");
    } else{
        alert("Acesso liberado");

    }
}