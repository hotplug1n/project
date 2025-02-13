function toggleMode() {
  const html = document.documentElement

  if(html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Função para copiar o ID do Discord
  function copyDiscordID() {
    const discordID = "piormorte1#0000"
    const textarea = document.createElement("textarea")
    textarea.value = discordID
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    document.body.removeChild(textarea)

    // Mostrar a notificação com animação
    const notification = document.getElementById("copy-notification")
    notification.style.visibility = "visible"
    notification.style.opacity = 1
    notification.style.top =
      "60px" /* Posiciona o balão corretamente abaixo do ícone */

    // Esconder a notificação após 3 segundos
    setTimeout(() => {
      notification.style.opacity = 0
      notification.style.visibility = "hidden"
      notification.style.top = "50px" /* Deixa o balão no local inicial */
    }, 3000)
  }

  // Atribui a função ao clique do ícone de Discord
  const discordIcon = document.getElementById("discord-icon")
  if (discordIcon) {
    discordIcon.addEventListener("click", copyDiscordID)
  }

  // Função para animar os ícones
  const icons = document.querySelectorAll("ion-icon")
  icons.forEach((icon, index) => {
    setTimeout(() => {
      icon.classList.add("visible")
    }, 2000 + 500 * index) // Atrasa cada ícone para que apareçam um de cada vez
  })

  // Função para animar os links e o conteúdo
  const links = document.querySelectorAll("a")
  links.forEach((link, index) => {
    setTimeout(() => {
      link.classList.add("visible")
    }, 2000 + 500 * index) // Cada link aparece com um pequeno atraso
  })
})


document.addEventListener("DOMContentLoaded", function () {
  // Função para mostrar a biografia com animação de slide e fade
  const biografiaButton = document.getElementById("biografia")
  const biografiaContent = document.getElementById("biografia-content")
  const container = document.getElementById("container")
  const voltarButton = document.getElementById("voltar")

  biografiaButton.addEventListener("click", function () {
    // Anima a transição para a biografia
    container.classList.add("hidden")
    setTimeout(() => {
      biografiaContent.classList.add("visible")
      voltarButton.classList.add("visible")
    }, 1000) // Espera o fade-out do container
  })

  // Função para voltar à tela inicial
  voltarButton.addEventListener("click", function () {
    biografiaContent.classList.remove("visible")
    voltarButton.classList.remove("visible")
    container.classList.remove("hidden")
  })
})



document.addEventListener("DOMContentLoaded", function () {
  const voltarButton = document.getElementById("voltar")
  const container = document.getElementById("container")
  const biografiaContent = document.getElementById("biografia-content")

  voltarButton.addEventListener("click", function () {
    // Aplica o fade-out na tela de biografia
    biografiaContent.classList.remove("visible")
    voltarButton.classList.remove("visible")

    // Aplica o fade-in na tela inicial
    container.classList.add("fade-in")

    // Espera o tempo da animação de fade para reiniciar a visibilidade
    setTimeout(() => {
      container.classList.remove("fade-in", "hidden")
      biografiaContent.classList.remove("visible")
    }, 1000) // Tempo de fade-out
  })
})