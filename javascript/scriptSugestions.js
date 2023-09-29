let sujestionList = ["Tudo", "Jogos", "Motores de jogo", "Project Zomboid", "Jogos de construção de cidade", "DayZ", "Computadores", "Mod", "Animação", "Jodos de quebra-cabeça", "Five Nights at Freddy's", "Couter-Strike", "Rockstar Games", "Ao vivo", "Minecraft Bedrock", "Video games de estrategia", "Enviados recentemente", "Assistidos", "Novidades para você"]
let scrollView = document.getElementById("scroll-view-bar-items")
let leftArrow = document.getElementById("left-arrow-button")
let rightArrow = document.getElementById("right-arrow-button")

for (let i in sujestionList) {
    let scrollItem = document.createElement("div")
    let itemText = document.createElement("div")

    scrollItem.setAttribute("class", "scroll-view-bar-item")
    itemText.setAttribute("class", "item-text")

    if (i == 0) {
        scrollItem.setAttribute("class", "selected-option-scroll-view-bar-item")
    }

    itemText.innerText = sujestionList[i]

    scrollItem.addEventListener("click", function () {
        document.querySelector("div.selected-option-scroll-view-bar-item").setAttribute("class", "scroll-view-bar-item")

        scrollItem.setAttribute("class", "selected-option-scroll-view-bar-item")
    })

    scrollItem.appendChild(itemText)
    scrollView.appendChild(scrollItem)
}

let maxPos = -document.querySelector("main").offsetWidth //+ scrollView.offsetWidth

let xPos = 0

scrollView.style.left = `${xPos}px`

leftArrow.addEventListener("click", function () {
    xPos += 350
    if (xPos >= 0) {
        scrollView.style.left = `${xPos}px`

        leftArrow.parentElement.style.display = "none"
        rightArrow.parentElement.style.display = "flex"
    } else {
        scrollView.style.left = `${xPos}px`

        leftArrow.parentElement.style.display = "flex"
        rightArrow.parentElement.style.display = "flex"
    }
})

rightArrow.addEventListener("click", function () {
    xPos -= 350
    if (xPos >= maxPos) {
        scrollView.style.left = `${xPos}px`

        leftArrow.parentElement.style.display = "flex"
    } else {
        scrollView.style.left = `${xPos - 16}px`

        leftArrow.parentElement.style.display = "flex"
        rightArrow.parentElement.style.display = "none"
    }
})