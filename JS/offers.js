function changeOffer(num) {
    switch (num) {
        case 1:
            document.querySelector("[data='one-star']").style.display = "block"
            document.querySelector("[data='two-star']").style.display = "none"
            document.querySelector("[data='three-star']").style.display = "none"
            break;
        case 2:
            document.querySelector("[data='one-star']").style.display = "none"
            document.querySelector("[data='two-star']").style.display = "block"
            document.querySelector("[data='three-star']").style.display = "none"
            break;
        case 3:
            document.querySelector("[data='one-star']").style.display = "none"
            document.querySelector("[data='two-star']").style.display = "none"
            document.querySelector("[data='three-star']").style.display = "block"
            break;
    }
}

changeOffer(1);