var istim = angular.module( "istim", ['ngRoute', 'ngCookies'] ); //definindo istim como um módulo do angular

istim.controller("IstimController", ['$scope', '$location', '$http', '$cookies' , function($scope, $location, $http, $cookies){ //adicionando o controller do módulo istim
    $scope.frase = "ISTIM";
    $scope.session = {};
    $scope.session.sessionUser = null;
    $scope.all_users = [];

    $scope.urlApiUser = "http://istimuser.nodejitsu.com/";

		$scope.auth = function (user) {
				$http.post($scope.urlApiUser + 'auth/logout', {}, {
		      withCredentials: true
		   })
			.success(function(response) {
				$scope.session.authenticated = false;
				$scope.session.sessionUser = null;
				console.log(response);
			})
			.error(function(response) {
				console.log("Not logged!");
			});

			var data = {'name' : user.name, 'email' : user.email, 'password' : user.password};
			$http.post($scope.urlApiUser + 'auth/login', data, {
	        withCredentials: true
	     })
			.success(function(data, status, headers, config) {
				$scope.session.authenticated = true;
				$scope.session.sessionUser = data;
				$location.path('/profile');
			})
			.error(function(response) {
				console.log("> Erro!")
				console.log(response);
			});
		};

		$scope.logout = function () {
			$http.post($scope.urlApiUser + 'auth/logout', {}, {
		      withCredentials: true
		   })
			.success(function(response) {
				$scope.session.authenticated = false;
				$scope.session.sessionUser = null;
				location.path('/');

			})
			.error(function(response) {
				console.log("ERROR::: " + response);
			});
		}
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
        templateUrl: 'dashboard.html',
        controller: 'DashboardController'
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
        //templateUrl: 'sign_in.html',
        controller: 'LogoutController'
    })
  .when( '/friends', {
        //templateUrl: 'friends.html',
        controller: 'FriendsController'
    })
  .when( '/signup', {
        templateUrl: 'sign_up.html',
        controller: 'SignupController'
    })
  .when( '/profile', {
        templateUrl: 'edit_profile.html',
        controller: 'ProfileController'
    })
	.when( '/addcoin', {
				templateUrl: 'add_coins.html',
				controller: 'CoinController'
		})
		.when( '/transfer', {
       templateUrl: 'transfer.html',
       controller: 'CoinController'
   })
    .when( '/perfil/:param1', {
       templateUrl: 'perfil.html',
       controller: 'UsersCtrl'
   })
    .when( '/items', {
  			templateUrl: 'profile.html',
  			controller: 'ItemsController'
  	})
  .when( '/sell/:id', {
  			templateUrl: 'sold.html',
  			controller: 'ItemsSellController'
  	})

  .otherwise( { redirectTo: '/' } );
});

