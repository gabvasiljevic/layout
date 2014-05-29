angular.module("istim").controller("GameShowController", ['$scope', '$http', '$routeParams',function(scope, http, routeParams){

	scope.api_url = "https://projetos.dimap.ufrn.br/istim/games/game/"+routeParams.id;

	http.get(scope.api_url)
		.success(function(data) {
			scope.game = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

}]);
