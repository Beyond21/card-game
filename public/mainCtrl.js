app.controller('mainCtrl', function ($scope, $timeout, cardFactory) {
    // the cards list array of the factory
    $scope.cards = cardFactory.cardList;
    // counts how many cards the user had sucessfuly flipped:
    $scope.counter = 0;
    // each card background img cover
    $scope.coverImg = "http://www.murphysmagicsupplies.com/images_email/Mandolin_BACK.jpg"

    // this is an inner function that changes the attribute that is inside each card. when isClicked is true,
    // the picture will appear, if not, the generic card's cover
    var _toggleCard = function (card) {
        card.isClicked = !card.isClicked
    }

    $scope.whenClicked1 = function (card) {
        if (!$scope.first) {
            $scope.card1 = card;
            $scope.first = card.name;
            console.log($scope.card1)
            console.log($scope.first)
            _toggleCard(card);
        } else if (!$scope.second) {
            $scope.whenclicked2(card)
        } else {
            console.log('wait!')
        }
    }

    $scope.whenclicked2 = function (card) {
        $scope.card2 = card;
        _toggleCard(card);
        $scope.second = card.name;
        if ($scope.second == $scope.first) {
            $scope.first = undefined;
            $scope.second = undefined;
            console.log("we are both " + card.name + "s!!!");
            $scope.counter += 2
            console.log($scope.counter)
            if ($scope.counter == $scope.cards.length) {
                alert('GAME OVER')
            }
        } else {
            console.log('try again!');
            _hideCard()
        }
    }
    var _hideCard = function () {
        $timeout(function () {
            $scope.card1.isClicked = false;
            $scope.card2.isClicked = false;
            $scope.first = undefined;
            $scope.second = undefined;
        }, 1000);
    }
});