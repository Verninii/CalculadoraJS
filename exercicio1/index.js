function addPlayer(){
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value

    const confirmacao = confirm("Você realmente deseja adicionar esse jogador?" +
        "\nPosição: " +  position +
        "\nNome: " + name +
        "\nNúmero: " + number
        )
    
        if(confirmacao){
            const team = document.getElementById('teamList')

            const playerItem = document.createElement('li')
            playerItem.id = "player-" + number
            playerItem.innerText = position + ": "  + name + " " + number

            team.append(playerItem)

            document.getElementById('position').value = ''
            document.getElementById('name').value = ''
            document.getElementById('number').value = ''
        }
}

function removePlayer() {
    const number = document.getElementById("numberToRemove").value
    const playerToRemove = document.getElementById("player-" + number)
  
    const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + "?")
  
    if (confirmation) {
      playerToRemove.remove()
      document.getElementById("numberToRemove").value = ""
    }
  }