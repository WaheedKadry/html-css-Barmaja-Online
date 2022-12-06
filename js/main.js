// Hum burger menu
const menu = document.getElementById("menu");
const actions = document.getElementById("actions");
menu.addEventListener("click", () => {
    
    
    menu.classList.toggle("active")
    actions.classList.toggle("active")
})

