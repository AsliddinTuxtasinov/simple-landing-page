const navMenu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = ()=>{
    menuBtn.classList.add("hide")
    navMenu.classList.remove("hide");
    navMenu.classList.add("nav-menu-show");
};
cancelBtn.onclick=()=>{
    menuBtn.classList.remove("hide");
    navMenu.classList.remove("nav-menu-show");
    navMenu.classList.add("hide");
}

// alert("Bu oddiy resposiv landing page ga qolib, Backend dasturchi(Asliddin) tomonidan o'rganish va mustahkamlash uchun bajarilgan");
console.log("Asliddin Tuxtasinov");
