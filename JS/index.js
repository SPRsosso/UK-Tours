document.querySelector("#banner").addEventListener("click", () => {
    location.href = "./index.html";
})

let aniMenu = document.querySelector("#animate-menu");
let header = document.querySelector("header");

function animateMenu() {
    requestAnimationFrame(animateMenu);

    let headerTop = header.getBoundingClientRect().top;
    let aniMenuTop = aniMenu.getBoundingClientRect().top;

    let difference = -(headerTop - aniMenuTop);

    if (difference >= 150) {
        setTimeout(() => {
            header.style.top = '0px'
            header.style.height = '100px'
        }, 400);
    } else {
        setTimeout(() => {
            header.style.top = '0px'
            header.style.height = '130px'
        }, 400);
    }
}
animateMenu();