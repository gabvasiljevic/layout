angular.module("istim").controller("ProfileController", ['$scope', '$http', '$location', '$cookies', function($scope, $http, $location, $cookies){
	$scope.edit_profile = function (user) {

		var data = { 'id' : $scope.session.sessionUser.id, 'name' : user.name, 'email' : user.email, 'password' : user.password };
		var config = { withCredentials: true, xsrfCookieName: $cookies, xsrfHeaderName: $cookies };

		$http.put($scope.urlApiUser + 'user/', data, config)
		.success(function(response) {
			$scope.session.sessionUser = response;
			$location.path('/dashboard');
		})
		.error(function(response) {
			console.log("ERROR::: " + response);
		});
	};
}]);
