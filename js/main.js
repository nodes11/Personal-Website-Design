var app = angular.module('PersonlWebsite', [
  'ngRoute'
]);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .otherwise({templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

app.controller('PageCtrl', function () {
  var date = new Date();
  var parts = date.toString().split(' ');
  date = parts[0] + " " + parts[1] + " " + parts[2] + ", " + parts[3];
  $(".time").html(date);

  $(".menu").on("click", function(event){
    if ($(".dropdown")[0].style.display == "none"){
      $(".dropdown")[0].style.display = "block";
    }
    else{
      $(".dropdown")[0].style.display = "none";
    }
  });
});
