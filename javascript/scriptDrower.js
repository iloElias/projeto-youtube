let mainMenuButton = document.getElementById("guide-bar-button")
let mainMenu = document.getElementById("app-guide")
let miniMenu = document.getElementById("mini-app-guide")

let suspendedMenu = document.getElementById("app-suspended-guide")
let modalBackgroundFade = document.getElementById("modal-background-fade")

let aside = document.getElementById("aside-element")

function hideMainMenu() {
    mainMenu.style.display = "none"
    miniMenu.style.display = "flex"
    aside.style.minWidth = "72px"
    aside.style.padding = "6px 4px"
    leftArrow.parentElement.style.left = "96px"
}

function hideSuspendedMenu() {
    suspendedMenu.style.left = "-240px"
    suspendedMenu.style.right = ""

    modalBackgroundFade.style.pointerEvents = "none"
    modalBackgroundFade.style.opacity = "0"
}

function showSuspendedMenu() {
    suspendedMenu.style.left = "0px"
    suspendedMenu.style.right = ""

    modalBackgroundFade.style.pointerEvents = "auto"
    modalBackgroundFade.style.opacity = "0.5"
}

function showMainMenu() {
    if (parseInt(window.innerHeight) < 580) {
        hideMainMenu()
    }

    mainMenu.style.display = "flex"
    miniMenu.style.display = "none"
    aside.style.minWidth = "240px"
    aside.style.padding = "14px 12px 0 12px"
    leftArrow.parentElement.style.left = "264px"
}

function hideAllAside() {
    mainMenu.style.display = "none"
    miniMenu.style.display = "none"
    aside.style.minWidth = "0"
    aside.style.padding = "0"
    leftArrow.parentElement.style.left = "24px"
}


window.addEventListener("resize", function () {
    if (parseInt(window.innerHeight) < 580 && parseInt(window.innerHeight) > 350) {
        hideMainMenu()
        hideSuspendedMenu()
    } else if (parseInt(window.innerHeight) < 350) {
        hideAllAside()
    } else {
        showMainMenu()
    }
})


mainMenuButton.addEventListener("click", function () {
    if (mainMenu.style.display == "none" && parseInt(window.innerHeight) > 580) {
        showMainMenu()
    } else if (parseInt(window.innerHeight) < 580) {
        showSuspendedMenu()
    } else {
        hideMainMenu()
    }
})

document.getElementById("suspended-guide-bar-button").addEventListener("click", function () {
    hideSuspendedMenu()
})

if (parseInt(window.innerHeight) > 580) {
    showMainMenu()
} else if (parseInt(window.innerHeight) > 350) {
    hideMainMenu()
} else {
    hideAllAside()
}

function startAll() {
    suspendedMenu.style.left = "-240px"
    suspendedMenu.style.right = ""

    modalBackgroundFade.style.pointerEvents = "none"
    modalBackgroundFade.style.opacity = "0"
}

startAll()
resizeContent()