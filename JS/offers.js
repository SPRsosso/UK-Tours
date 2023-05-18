let tmp = 1;
let tab = [];

function changeOffer(num) 
{

    // var offers = document.querySelectorAll('.offer');
    // offers.forEach(function (offer) {
    //     offer.classList.remove('rev-slide-animation');
    // });

    // var currentOffer = document.querySelector('[data="' + getOfferData(tmp) + '"]');
    // currentOffer.classList.add('rev-slide-animation ');

    let x = tab[tab.length-2]
    var offers = document.querySelectorAll('.offer');
    offers.forEach(function (offer) {
        offer.classList.remove('rev-slide-animation')
        offer.classList.remove('slide-animation');
    });

    // var currentOffer = document.querySelector('[data="' + getOfferData(x) + '"]');
    // currentOffer.classList.add('rev-slide-animation')

    // var selectedOffers = document.querySelector('[data="' + getOfferData(x) + '"]');
    // selectedOffers.classList.add('rev-slide-animation');

    var selectedOffers = document.querySelector('[data="' + getOfferData(num) + '"]');
    selectedOffers.classList.add('slide-animation');

    switch (num) {
        case 1:
            document.querySelector("[data='one-star']").style.display = "block"
            document.querySelector("[data='two-star']").style.display = "none"
            document.querySelector("[data='three-star']").style.display = "none"
            tmp = 1
            tab.push(tmp);
            break;
        case 2:
            document.querySelector("[data='one-star']").style.display = "none"
            document.querySelector("[data='two-star']").style.display = "block"
            document.querySelector("[data='three-star']").style.display = "none"
            tmp = 2
            tab.push(tmp);
            break;
        case 3:
            document.querySelector("[data='one-star']").style.display = "none"
            document.querySelector("[data='two-star']").style.display = "none"
            document.querySelector("[data='three-star']").style.display = "block"
            tmp = 3
            tab.push(tmp);
            break;
    }
}

function getOfferData(num) 
{
    switch (num) {
        case 1:
            return 'one-star';
        case 2:
            return 'two-star';
        case 3:
            return 'three-star';
    }
}

changeOffer(1);