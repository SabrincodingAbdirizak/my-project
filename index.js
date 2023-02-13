 



let clickbutton = document.querySelector(".button");

let links = document.querySelector(".link");

clickbutton.addEventListener("click", ()=> {
    links.classList.toggle("active");
})