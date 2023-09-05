const hamburger = document.getElementById("menuu");
const navDropdown = document.getElementById("nav-dropdown")
const times = document.getElementById("times")

hamburger.addEventListener("click", () => {
    navDropdown.style.display = "block"
    times.style.display = "block"
    hamburger.style.display = "none"
})
times.addEventListener("click", () => {
    times.style.display = "none"
    hamburger.style.display = "block"
    navDropdown.style.display = "none"
})