app.factory('cardFactory', function () {

    var cardFactory = {};

    var array = [
        { img: "http://media1.britannica.com/eb-media/91/170891-004-156B3680.jpg", name: "hamster", isClicked: false },
        { img: "https://eurekacdn-stips.netdna-ssl.com/images/w400/4610948947.jpg", name: "dolphine", isClicked: false },
        { img: "http://www.publicdomainpictures.net/pictures/100000/velka/pink-flamingo-1408816270QG3.jpg", name: "flamingo", isClicked: false },
        { img: "http://media1.britannica.com/eb-media/91/170891-004-156B3680.jpg", name: "hamster", isClicked: false },
        { img: "https://eurekacdn-stips.netdna-ssl.com/images/w400/4610948947.jpg", name: "dolphine", isClicked: false },
        { img: "http://www.publicdomainpictures.net/pictures/100000/velka/pink-flamingo-1408816270QG3.jpg", name: "flamingo", isClicked: false },
        { img: "https://i.pinimg.com/736x/26/2c/d9/262cd912194f15622f7143afde6387c1--cute-baby-animals-animal-babies.jpg", name: "Kangaroo", isClicked: false },
        { img: "https://i.pinimg.com/736x/26/2c/d9/262cd912194f15622f7143afde6387c1--cute-baby-animals-animal-babies.jpg", name: "Kangaroo", isClicked: false },
        { img: "https://i0.wp.com/www.styliwallpapers.com/wp-content/uploads/2015/03/The-Softest-Baby-Kitten.jpg", name: "Kitten", isClicked: false },
        { img: "https://i0.wp.com/www.styliwallpapers.com/wp-content/uploads/2015/03/The-Softest-Baby-Kitten.jpg", name: "Kitten", isClicked: false },
        { img: "http://www.piperstreetvet.com.au/wp-content/uploads/2015/11/puppy.jpg", name: "puppy", isClicked: false },
        { img: "http://www.piperstreetvet.com.au/wp-content/uploads/2015/11/puppy.jpg", name: "puppy", isClicked: false },
        { img: "http://media.npr.org/assets/img/2017/02/05/baby-fiona_wide-0495d60b84dcba6d79deffd4cb35a7eb3292b228-s900-c85.jpg", name: "hipo", isClicked: false },
        { img: "http://media.npr.org/assets/img/2017/02/05/baby-fiona_wide-0495d60b84dcba6d79deffd4cb35a7eb3292b228-s900-c85.jpg", name: "hipo", isClicked: false },
        { img: "https://i.pinimg.com/736x/8a/1d/f9/8a1df934ce45584456a5611b0f5cb3d4--so-tired-cute-panda.jpg", name: "panda", isClicked: false },
        { img: "https://i.pinimg.com/736x/8a/1d/f9/8a1df934ce45584456a5611b0f5cb3d4--so-tired-cute-panda.jpg", name: "panda", isClicked: false },
        { img: "https://s-media-cache-ak0.pinimg.com/originals/60/20/58/6020587ffa2e449026bb5c749fea0bf5.jpg", name: "pinguin", isClicked: false },
        { img: "https://s-media-cache-ak0.pinimg.com/originals/60/20/58/6020587ffa2e449026bb5c749fea0bf5.jpg", name: "pinguin", isClicked: false },
    ];

    var shuffleArray = function (array) {
        var m = array.length,
            t, i;

        // While there remain elements to shuffle
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;
    }
    shuffleArray(array);

    cardFactory.cardList = array;

    return cardFactory;

});
