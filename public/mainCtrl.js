app.controller('mainCtrl', function($scope, cardFactory){


$scope.cards = cardFactory.cardList

$scope.test = cardFactory.text

$scope.saymyname = function(card){
    alert(card.name)
}

$scope.cardClicked = false
$scope.removeCover = function(){
    $scope.cardClicked = !$scope.cardClicked
}



});


