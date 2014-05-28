var istim = angular.module( "istim", ['ngRoute'] ); //definindo istim como um módulo do angular

istim.controller("IstimController", ['$scope', '$location' , function($scope, $location){ //adicionando o controller do módulo istim
    $scope.frase = "ISTIM";
    $scope.session = {};
    $scope.session.sessionUser = null;
    $scope.all_users = [];

    $scope.urlApiUser = "http://istimuser.nodejitsu.com/";
}]);

istim.config( function ( $routeProvider ) { // configurando as rotas do módulo istim
  $routeProvider
  .when( '/', {
        //templateUrl: 'index.html',
        //controller: 'IstimController'
    })
  .when( '/games', {
        templateUrl: 'games.html',
        controller: 'GamesController'
    })
  .when( '/game_show/:id', {
        templateUrl: 'game_show.html',
        controller: 'GameShowController'
    })
  .when( '/about', {
        templateUrl: 'about.html'//,
        //controller: 'GamesController'
    })
  .when( '/contact_us', {
        templateUrl: 'contact_us.html'//,
        //controller: 'GamesController'
    })
  .when( '/dashboard', {
        templateUrl: 'dashboard.html'//,
        //controller: 'IstimController'
    })
  .when( '/developers', {
        templateUrl: 'developers.html'//,
        //controller: 'GamesController'
    })
  .when( '/news', {
        templateUrl: 'news.html'//,
        //controller: 'GamesController'
    })
  .when( '/ranking', {
        templateUrl: 'ranking.html'//,
        //controller: 'GamesController'
    })
  .when( '/statistics', {
        templateUrl: 'statistics.html'//,
        //controller: 'GamesController'
    })
  .when( '/login', {
        templateUrl: 'sign_in.html',
        controller: 'LoginController'
    })
  .when( '/logout', {
        templateUrl: 'sign_in.html',
        controller: 'LogoutController'
    })
  .when( '/signup', {
        templateUrl: 'sign_up.html',
        controller: 'SignupController'
    })
  .when( '/profile', {
        templateUrl: 'edit_profile.html',
        controller: 'ProfileController'
    })
  .when( '/items', {
        templateUrl: 'profile.html',
        controller: 'ItemsController'
    })
  .otherwise( { redirectTo: '/' } );
});

