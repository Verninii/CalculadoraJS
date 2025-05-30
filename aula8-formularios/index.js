const form = document.getElementById('orderForm')

form.addEventListener('submit',function(ev){
    //previne o comportamento padrão de recarregar a pagina
    ev.preventDefault()

    // é lido da seguinte forma
    //queryselector seleciona a tag input que dentro dela tem o atributo name que é igual a name 
    const name = document.querySelector('input[name = "name"]').value
    const address = document.querySelector('input[name = "address"]').value
    const breadType = document.querySelector('select[name = "breadType"]').value
    const main = document.querySelector('input[name = "main"]').value
    const observations = document.querySelector('textarea[name = "observations"]').value

    let salad = ""
    document.querySelectorAll('input[name="salad"]:checked').forEach(function(item){
        salad += " - " + item.value + "\n"
    })

    console.log({name,
        address,
        breadType,
        main,
        salad,
        observations})

        alert(
            "Pedido Realizado!" +
            "\nNome do cliente: " + name +
            "\nEndereço de entrega: " + address +
            "\nTipo de pão: " + breadType +
            "\nRecheio: \n - " + main + "\n" + salad +
            "Observações: " + observations
          )
})