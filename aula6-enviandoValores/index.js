function register(element){
    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    if(password == passwordConfirmation){
        alert("Usuário: " + username + " registrado!")
        console.log(password, passwordConfirmation, username)
    }else{
        alert("As senhas estão incompatíveis!")
    }
}