const hamburger_container = document.querySelector(".hamburger-container")
const navigation = document.getElementById("navigation-1")
const bar1 = document.querySelector(".bar1-hamburger")
const bar2 = document.querySelector(".bar2-hamburger")
const bar3 = document.querySelector(".bar3-hamburger")
const allA = document.querySelectorAll(".area")

allA.forEach(function (element) {
    element. addEventListener("click", () => {
    if (navigation.classList.contains("active")) {
        navigation.classList.toggle("active")
        hamburger_container.classList.toggle("active")

        bar1.classList.toggle("active")
        bar2.classList.toggle("active")
        bar3.classList.toggle("active")
    }
})})


hamburger_container.addEventListener("click", () => {
    navigation.classList.toggle("active")
    hamburger_container.classList.toggle("active")

    bar1.classList.toggle("active")
    bar2.classList.toggle("active")
    bar3.classList.toggle("active")
})