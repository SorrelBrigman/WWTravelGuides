
const app = angular
  .module('travelGuidesApp', ['ngRoute'])
  .config(($routeProvider) => {
    $routeProvider
    .when('/', {
      controller: "BookCtrl",
      templateUrl: "partials/book.html"
    })
  }) //end of config
