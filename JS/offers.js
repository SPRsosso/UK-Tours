function changeOffer(num) 
{
    let articles = document.querySelectorAll("#offers article");
    let count = 0;
    switch (num) {
        case 1:
            count = 0;
            articles.forEach(( article ) => {
                article.style.left = count + "vw";
                count += 100;
            });
            break;
        case 2:
            count = -100;
            articles.forEach(( article ) => {
                article.style.left = count + "vw";
                count += 100;
            });
            break;
        case 3:
            count = -200;
            articles.forEach(( article ) => {
                article.style.left = count + "vw";
                count += 100;
            });
            break;
    }
}