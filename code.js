const mainscreen = document.querySelector(".main-content")
const secondscreen = document.querySelector(".thanks-content")
const submitButton = document.getElementById("submit")
const rating = document.getElementById("rate")
const rates = document.querySelectorAll(".button")



rates.forEach((rate) => {
    rate.addEventListener("click", ()=> {
        if(rate === 1 || 2 || 3 || 4 || 5) {
            rating.innerHTML = rate.innerHTML;
        
            submitButton.addEventListener("click", () => {
                secondscreen.classList.remove("hidden")
            })
            
            
            submitButton.addEventListener("click", () => {
                mainscreen.classList.add("hidden")
            })
        }
    })
})

