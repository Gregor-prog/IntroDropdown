let menub = document.querySelector("#menub");
let menu = document.querySelector("#menu")
let menuc = document.querySelector("#menuc")

menub.addEventListener("click", () => {
    menu.style.display = "block"
})
menuc.addEventListener("click", () => {
    menu.style.display = "none"
})

let shh1 = document.querySelector("#shh1")
let shh2 = document.querySelector("#shh2")
let drop1 = document.querySelector("#drop1")
let drop2 = document.querySelector("#drop2")
let comapny = document.querySelector("#company")
let features = document.querySelector("#features")

drop1.style.display = "none"
drop2.style.display = "none"
features.addEventListener("click", () => {
    if(drop1.style.display == "none"){
        drop1.style.display = "block"
        shh1.setAttribute("src","../images/icon-arrow-down.svg")
    }
    else if(drop1.style.display == "block"){
        drop1.style.display = "none"
        shh1.setAttribute("src","../images/icon-arrow-up.svg")
    }
    else{
        console.log("damn, this is bad")
    }
})

comapny.addEventListener("click", () => {
    if(drop2.style.display == "none"){
        drop2.style.display = "block"
       shh2.setAttribute("src","../images/icon-arrow-down.svg") 
    }
    else if(drop2.style.display == "block"){
        drop2.style.display = "none"
        shh2.setAttribute("src","../images/icon-arrow-up.svg")
    }
    else{
        console.log("bad also")
    }
})

