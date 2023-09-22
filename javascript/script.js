let searchInputBar = document.getElementById("main-search-input")
let originalSearchInputBarColor = document.querySelector("div.search-input-border").style.borderColor
let canShow = true

document.getElementById("youtube-search-icon").addEventListener("animationend", function () {
    if (canShow) {
        document.getElementById("youtube-search-icon").style.display = "flex"
        canShow = false
    } else {
        document.getElementById("youtube-search-icon").style.display = "none"
        canShow = true
    }
    return
});

searchInputBar.addEventListener("focus", function () {
    let mainInputBorder = document.getElementById("search-input-border")
    let searchIcon = document.getElementById("youtube-search-icon")

    document.getElementById("spaceBtw").style.animation = "spaceShow 0.1s"
    document.getElementById("spaceBtw").addEventListener("animationend", function () {
        document.getElementById("spaceBtw").style.width = "0px"
        searchIcon.style.display = "block"
        searchIcon.style.display = "flex"
    })

    document.getElementById("search-input").style.animation = "showAnimation 0.1s"
    document.getElementById("search-input").style.margin = "0 0 0 0px";

    mainInputBorder.style.borderColor = "#1c62b9"
})

searchInputBar.addEventListener("blur", function () {
    let mainInputBorder = document.getElementById("search-input-border")
    let searchIcon = document.getElementById("youtube-search-icon")

    searchIcon.style.display = "none"
    document.getElementById("spaceBtw").style.width = "36px"
    document.getElementById("spaceBtw").style.animation = "spaceHide 0.1s"
    document.getElementById("spaceBtw").addEventListener("animationend", function () {
        searchIcon.style.display = "none"
    })

    document.getElementById("search-input").style.animation = "hideAnimation 0.1s"
    document.getElementById("search-input").style.margin = "0 0 0 32px";

    mainInputBorder.style.borderColor = originalSearchInputBarColor
})

searchInputBar.addEventListener("input", function (selected) {
    if (selected.target.value == "") {
        document.getElementById("remove-all-search").style.display = "none"
        document.getElementById("digital-keyboard").style.right = "0"
    } else {
        document.getElementById("remove-all-search").style.display = "flex"
        document.getElementById("digital-keyboard").style.right = "-16px"
    }
})

document.getElementById("remove-all-search").addEventListener("click", function () {
    if (searchInputBar.value != "") {
        searchInputBar.value = ""
        document.getElementById("remove-all-search").style.display = "none"
        document.getElementById("digital-keyboard").style.right = "0"
    }
})

function resizeContent() {
    let viewportHeight = window.innerHeight;
    console.log(viewportHeight)
    document.getElementById("app-guide").style.maxHeight = `${viewportHeight - 68}px`
    if (document.querySelector("#app-suspended-guide .guide-container")) {
        document.querySelector("#app-suspended-guide .guide-container").style.maxHeight = `${window.innerHeight - 68}px`
    }
}

window.addEventListener("resize", function () {
    resizeContent()
})

resizeContent()