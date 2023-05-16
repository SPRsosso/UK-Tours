function changeImage(image)
{
    let big = document.getElementById("big");
    let small = document.getElementsByClassName("small");

    for (let i = 0; i < small.length; i++)
        small[i].setAttribute('style', "opacity: 0.3");

    big.setAttribute('src', image.getAttribute('src'));
    image.setAttribute('style', "opacity: 1");
}