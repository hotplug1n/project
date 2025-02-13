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
