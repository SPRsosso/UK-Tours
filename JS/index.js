document.querySelector("#banner").addEventListener("click", () => {
    location.href = "./index.html";
})

let aniMenu = document.querySelector("#animate-menu");
let header = document.querySelector("header");
let toTop = document.querySelector("#to-top");

function animateMenu() {
    requestAnimationFrame(animateMenu);

    let headerTop = header.getBoundingClientRect().top;
    let aniMenuTop = aniMenu.getBoundingClientRect().top;

    let difference = -(headerTop - aniMenuTop);

    if (difference >= 150) {
        setTimeout(() => {
            header.style.top = '0px'
            header.style.height = '100px'
            toTop.style.display = "block";
        }, 400);
    } else {
        setTimeout(() => {
            header.style.top = '0px'
            header.style.height = '130px'
            toTop.style.display = "none";
        }, 400);
    }
}
animateMenu();