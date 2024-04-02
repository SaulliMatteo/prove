const body = document.querySelector("body");
const toggleSwitch = body.querySelector(".toggle-switch");
const toggle = body.querySelector(".toggle");
const toggleElement = body.querySelectorAll(".toggle-element")
const sideMenu = body.querySelector(".side-menu");
const switchText = body.querySelector(".switch-text");
const sunImg = body.querySelector(".sun")
const moonImg = body.querySelector(".moon")

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("Dark");

    if(body.classList.contains("Dark")){
        switchText.textContent = "Light Mode"
        moonImg.classList.add("visibility");
        sunImg.classList.remove("visibility")
    }
    else{
        switchText.textContent = "Dark Mode"
        moonImg.classList.remove("visibility");
        sunImg.classList.add("visibility")
    }
    
})

toggle.addEventListener("click", () => {
    sideMenu.classList.toggle("close")

    toggleElement.forEach(element => {
        element.classList.toggle("display")
    })
})