app.factory('cardFactory', function () {

    var cardList = 
    [
        { img: "http://media1.britannica.com/eb-media/91/170891-004-156B3680.jpg", name: "hamster" },
        { img: "https://eurekacdn-stips.netdna-ssl.com/images/w400/4610948947.jpg", name: "dolphine" },
        { img: "http://www.publicdomainpictures.net/pictures/100000/velka/pink-flamingo-1408816270QG3.jpg", name: "flamingo" },

    ];

//var hiddenCards = [];
    



    return {
        cardList: cardList
    }
});