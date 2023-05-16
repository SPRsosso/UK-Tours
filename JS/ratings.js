class Rating {
    constructor(email, stars, description) {
        this.email = email;
        this.stars = stars;
        this.description = description;
    }
}

let homePage = document.querySelector("body[data-type='home-page']");
let londonPage = document.querySelector("body[data-type='london-page']");
let belfastPage = document.querySelector("body[data-type='belfast-page']");
let edinburghPage = document.querySelector("body[data-type='edinburgh-page']");
let cardiffPage = document.querySelector("body[data-type='cardiff-page']");
let ratingStars = 0;

let homeRatingArr = 
[
    new Rating("charlie.ham@gmail.com", 5, "I had an amazing experience with UK Tours! Our tour guide was excellent, providing us with interesting and insightful commentary throughout the tour. The itinerary was well-planned, allowing us plenty of time to explore each stop and take photos. The transportation was also a highlight, as we rode in comfort and luxury, and our driver was professional and skilled. Overall, I would highly recommend UK Tours to anyone looking for a top-quality tour experience."),
    new Rating("gamer@hey.uk", 4, "I had a great experience with UK Tours. The tour guide was knowledgeable and friendly, and the itinerary was well-planned. We had enough time to explore each stop and take photos, and the transportation was comfortable and spacious. The driver was also safe and responsible, which made me feel at ease during the journey. Overall, I would recommend UK Tours to others and would consider using them again for future tours."),
    new Rating("hannahfruh@tvshow.de", 3, "My experience with UK Tours was decent. The tour guide was knowledgeable and provided interesting commentary throughout the tour. However, the itinerary felt a bit rushed, and we didn't have much time to explore some of the stops. The transportation was comfortable but not luxurious, and the driver was safe and responsible. Overall, the tour was enjoyable, but I don't feel that it was exceptional compared to other tour companies I've used in the past."),
    new Rating("clay.como@staff.eu", 2, "My experience with UK Tours was average at best. While the tour guide was knowledgeable and friendly, the itinerary was too rushed, and we didn't have enough time to explore each stop thoroughly. The transportation was also quite cramped and uncomfortable, which made the journey less enjoyable. While the tour was not terrible, I don't feel that it was worth the money that I paid for it. Overall, I would suggest looking into other tour companies before booking with UK Tours."),
    new Rating("raymancolm@gmail.com", 1, "I recently booked a tour with a UK Tours business, and it was a complete disappointment. The tour guide was unprofessional and seemed disinterested in providing a good experience. The itinerary was poorly planned, and we spent most of our time waiting in long lines or stuck in traffic. The transportation was uncomfortable, and the tour was overcrowded, making it difficult to hear the guide's commentary."),
    new Rating("zbigniew.cooker@gmail.com", 4, "Good morning, my name is Zbigniew Cooker, I'm a faggot and an exhibitionist. I love it when men stick their dicks in my ass and tell me to suck it, and of course they finish into my mouth. Cum's taste is what turns me on. Greetings.")
];
let homeRandNumbers = makeRandArr(homeRatingArr.length);

let londonRatingArr =
[
    new Rating("transport.business@gmail.com", 5, "The itinerary was well-planned, and we were able to see all of the city's iconic landmarks and attractions, as well as some hidden gems that we would not have discovered on our own. The transportation provided by the tour company was comfortable, reliable, and even included some unique modes of transportation, such as a boat ride on the Thames. The customer service provided by the tour company was outstanding, with prompt responses to any inquiries, and a willingness to go above and beyond to ensure that we had a great experience."),
    new Rating("hannahfruh@tvshow.de", 4, "I recently went on a tour of London with a UK Tours business, and it was a great experience overall. The tour guide was knowledgeable, friendly, and engaging, making the tour both informative and enjoyable."),
    new Rating("clay.como@staff.eu", 3, "I recently went on a tour of London with a UK Tours business, and overall, it was a decent experience. The tour guide was knowledgeable and friendly, providing interesting commentary throughout the tour. The itinerary was well-planned, and we were able to see many of the city's iconic landmarks and attractions. The transportation provided by the tour company was comfortable and reliable, making for a stress-free experience. While the tour was enjoyable, there were some areas where the tour company could improve. For example, some of the scheduled stops felt rushed, with not enough time given to fully appreciate the attractions. Additionally, the customer service provided by the tour company was average, with no real effort made to go above and beyond to address any issues or concerns. Overall, if you're looking for a decent tour of London at a reasonable price, this UK Tours business may be worth considering. However, if you want a more personalized and in-depth tour experience, you may want to look elsewhere."),
    new Rating("love.uk@help.com", 2, "I recently went on a tour of London with a UK Tours business, and while it wasn't terrible, it wasn't great either. The tour guide was knowledgeable about the city, but their delivery was dry and lacked enthusiasm, making the tour feel a bit dull."),
    new Rating("hater-abroad@gmail.com", 1, "I recently went on a tour of London with a UK Tours business, and it was a complete disaster. The tour guide seemed unprepared and disorganized, constantly losing track of the group and struggling to answer basic questions about the city. The itinerary was also poorly planned, with many of the scheduled attractions being closed or under construction. We were forced to spend hours waiting in long lines, and by the time we finally got inside, we were rushed through the exhibits without any time to fully appreciate them.")
];
let londonRandNumbers = makeRandArr(londonRatingArr.length);

let belfastRatingArr =
[
    new Rating("gfkdistribution@sousousousou.com", 5, "I recently went on a tour of Belfast with a UK Tours business, and it was an absolutely fantastic experience. The tour guide was incredibly knowledgeable and passionate about the city's history and culture, making the tour engaging and informative. The tour company went above and beyond in addressing any concerns or issues that arose during the tour, making us feel well taken care of and valued as customers."),
    new Rating("cixgte@readysetgaps.com", 4, "I would highly recommend this UK Tours business for tours of Belfast. With a knowledgeable and friendly guide, a well-planned itinerary, and excellent customer service, this tour exceeded my expectations and left me with a memorable experience. While there is always room for improvement, this tour is definitely worth considering if you are planning a visit to Belfast."),
    new Rating("dgalia@hrnoedi.com", 3, "I recently went on a tour of Belfast with a UK Tours business, and it was an okay experience overall. The tour guide was knowledgeable and provided interesting information about the city and its history, but could have been more engaging and enthusiastic."),
    new Rating("pcheladoc@starasta1.com", 2, "The transportation provided by the tour company was average, with a decent bus but nothing particularly comfortable or luxurious. The customer service provided by the tour company was mediocre, with no real effort made to address any issues or concerns that arose during the tour."),
    new Rating("filmwatcher@gmail.com", 1, "I recently went on a tour of Belfast with a UK Tours business, and it was an absolute disaster from start to finish. The tour guide was completely unprepared and lacked any knowledge about the city or its history, making the tour both confusing and boring. Overall, I would highly recommend avoiding this UK Tours business for any tours of Belfast.")
];
let belfastRandNumbers = makeRandArr(belfastRatingArr.length);

let edinburghRatingArr =
[
    new Rating("cptgilber@bandtoo.com", 5, "I would highly recommend this UK Tours business for a tour of Edinburgh. The knowledgeable and passionate guide, well-crafted itinerary, comfortable transportation, and exceptional customer service made for an unforgettable and enriching experience. I can't wait to book another tour with this company in the future."),
    new Rating("loriab21@vytevident.com", 4, "The itinerary was well-planned, with a good mix of historical sites, cultural attractions, and scenic spots. The transportation provided by the tour company was comfortable and reliable, making for a stress-free experience. The customer service provided by the tour company was excellent, with a proactive effort made to ensure our satisfaction throughout the tour. Any concerns or issues we had were addressed promptly and effectively."),
    new Rating("gvanmellaerts@storebas.online", 3, "I would recommend considering this UK Tours business for a tour of Edinburgh if you are looking for a decent, if somewhat uninspiring, experience. The knowledgeable guide, decent itinerary, and adequate transportation make for a decent tour, but there is room for improvement in terms of engagement, itinerary planning, and customer service."),
    new Rating("negro43@scatterteam.com", 2, "I recently went on a tour of Edinburgh with a UK Tours business, and while it was not a terrible experience, it left much to be desired. The tour guide was knowledgeable about the city and its history, but lacked enthusiasm and engagement, making for a less-than-engaging tour."),
    new Rating("brucequinn@yolbiletim.xyz", 1, "The tour guide was unengaging and seemed to be going through the motions, providing very little information about the city or its history. I would strongly advise against booking a tour with this UK Tours business for Edinburgh.")
];
let edinburghRandNumbers = makeRandArr(edinburghRatingArr.length);

let cardiffRatingArr =
[
    new Rating("dasaxman@badred.pw", 5, "I recently went on a tour of Cardiff with a UK Tours business, and it was an exceptional experience. The tour guide was enthusiastic, engaging, and knowledgeable, providing fascinating insights into the history and culture of the city."),
    new Rating("l8tbluemr@boxervibe.us", 4, "I recently went on a tour of Cardiff with a UK Tours business, and it was an overall excellent experience. The tour guide was friendly, engaging, and knowledgeable, providing interesting insights into the history and culture of the city."),
    new Rating("campoe41@hula3s.com", 3, "I recently went on a tour of Cardiff with a UK Tours business, and while there were some areas for improvement, it was a generally enjoyable experience. The tour guide was friendly and knowledgeable, providing interesting insights into the history and culture of the city."),
    new Rating("ginsberg469@youredoewlive.com", 2, "The customer service provided by the tour company was satisfactory, but nothing special. While they did address some concerns we had during the tour, there wasn't a particularly proactive effort made to ensure our satisfaction. I would not strongly recommend this UK Tours business for a tour of Cardiff, but it may be worth considering if there are no other options available."),
    new Rating("s1grett@toped303.com", 1, "I recently went on a tour of Cardiff with a UK Tours business, and it was a disappointing experience. The tour guide seemed disinterested and lacked knowledge about the city, making for a boring and uninformative tour.")
];
let cardiffRandNumbers = makeRandArr(cardiffRatingArr.length);




if (homePage) 
{
    let savedArr = makeSavedArr(homeRatingArr, homeRandNumbers);
    if (localStorage.getItem("home"))
        savedArr = JSON.parse(localStorage.getItem("home"));

    localStorage.setItem("home", JSON.stringify(savedArr));
    makeRatingCards(savedArr);
} 
else if (londonPage) 
{
    let savedArr = makeSavedArr(londonRatingArr, londonRandNumbers);
    if (localStorage.getItem("london"))
        savedArr = JSON.parse(localStorage.getItem("london"));

    localStorage.setItem("london", JSON.stringify(savedArr));
    makeRatingCards(savedArr);
} 
else if (cardiffPage) 
{
    let savedArr = makeSavedArr(cardiffRatingArr, cardiffRandNumbers);
    if (localStorage.getItem("cardiff"))
        savedArr = JSON.parse(localStorage.getItem("cardiff"));

    localStorage.setItem("cardiff", JSON.stringify(savedArr));
    makeRatingCards(savedArr);
} 
else if (edinburghPage) 
{
    let savedArr = makeSavedArr(edinburghRatingArr, edinburghRandNumbers);
    if (localStorage.getItem("edinburgh"))
        savedArr = JSON.parse(localStorage.getItem("edinburgh"));

    localStorage.setItem("edinburgh", JSON.stringify(savedArr));
    makeRatingCards(savedArr);
} 
else if (belfastPage) 
{
    let savedArr = makeSavedArr(belfastRatingArr, belfastRandNumbers);
    if (localStorage.getItem("belfast"))
        savedArr = JSON.parse(localStorage.getItem("belfast"));

    localStorage.setItem("belfast", JSON.stringify(savedArr));
    makeRatingCards(savedArr);
}

function makeRandArr(ArrLength) 
{
    let arr = [];
    while (arr.length < 3) 
    {
        let rand = Math.floor(Math.random() * ArrLength);
        if (arr.length > 1) 
        {
            if (arr[0] != rand && arr[1] != rand)
                arr.push(rand);
        } 
        else if (arr.length > 0) 
        {
            if (arr[0] != rand)
                arr.push(rand);
        } 
        else 
        {
            arr.push(rand);
        }
    }

    return arr;
}

function makeSavedArr(inputArr, rands) {
    let arr = [];

    for (let i = 0; i < rands.length; i++) {
        arr.push(inputArr[rands[i]]);
    }
    
    return arr;
}

function makeRatingCards(reviewArr) {
    //kocham Wiktora Wolnika
    let mainWindow = document.querySelector("#ratings #cards-holder");
    mainWindow.innerHTML = "";

    if (mainWindow) 
    {
        for (let i = 0; i < reviewArr.length; i++) 
        {
            let card = `<div class="card">
                            <h1 data="email">${reviewArr[i].email}</h1>
                            <div data="stars">`;
            for (let j = 0; j < reviewArr[i].stars; j++)
            {
                card += `<img src="./IMGS/starFilled.png">`;
            }
        
            for (let j = 0; j < 5 - reviewArr[i].stars; j++) 
            {
                card += `<img src="./IMGS/starUnfilled.png">`;
            }
        
            card += `<p>${reviewArr[i].stars}/5 Stars</p>
                    </div>
                    <div data="description">
                        <p>
                            ${reviewArr[i].description}
                        </p>
                    </div>`;

            mainWindow.innerHTML += card;
        }
    }
}

function addRating() {
    let email = document.querySelector("#rating-email").value;
    let description = document.querySelector("#rating-description").value;

    if (homePage) {
        let savedArr = JSON.parse(localStorage.getItem("home"));

        savedArr.push(new Rating(email, ratingStars, description));
        localStorage.setItem("home", JSON.stringify(savedArr));

        makeRatingCards(savedArr);
    } else if (londonPage) {
        let savedArr = JSON.parse(localStorage.getItem("london"));

        savedArr.push(new Rating(email, ratingStars, description));
        localStorage.setItem("london", JSON.stringify(savedArr));

        makeRatingCards(savedArr);
    } else if (cardiffPage) {
        let savedArr = JSON.parse(localStorage.getItem("cardiff"));

        savedArr.push(new Rating(email, ratingStars, description));
        localStorage.setItem("cardiff", JSON.stringify(savedArr));

        makeRatingCards(savedArr);
    } else if (edinburghPage) {
        let savedArr = JSON.parse(localStorage.getItem("edinburgh"));

        savedArr.push(new Rating(email, ratingStars, description));
        localStorage.setItem("edinburgh", JSON.stringify(savedArr));

        makeRatingCards(savedArr);
    } else if (belfastPage) {
        let savedArr = JSON.parse(localStorage.getItem("belfast"));

        savedArr.push(new Rating(email, ratingStars, description));
        localStorage.setItem("belfast", JSON.stringify(savedArr));

        makeRatingCards(savedArr);
    }

    closeRating();
}

function changeStars(num) {
    for (i = 1; i <= 5; i++) {
        let star = document.querySelector("#star-" + i);
        star.src = "./IMGS/starUnfilled.png";
    }

    for (i = 1; i <= num; i++) {
        let star = document.querySelector("#star-" + i);
        star.src = "./IMGS/starFilled.png";
    }

    ratingStars = num;
}

function openRating() {
    document.querySelector("#add-rating-holder").style.display = "flex";
}

function closeRating() {
    document.querySelector("#add-rating-holder").style.display = "none";
}