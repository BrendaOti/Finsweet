const hamburgericon = document.getElementById("icon")
const navbar = document.getElementById("nav")

hamburgericon.addEventListener("click", function () {
    navbar.classList.toggle("flex")
})