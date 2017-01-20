app.controller("BookCtrl", function($scope, guideFactory) {
  guideFactory.getGuides()
  .then((response)=>{
    $scope.books = response;
    console.log($scope.books)
  });


}) //end of controller
