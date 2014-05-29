angular.module("istim").controller("SignupController", ['$scope', '$http', '$location', function(scope, http, location){
	scope.signup = function (user) {
		var data = {'name': user.name, 'email' : user.email, 'password' : user.password};
		http.post(scope.urlApiUser + 'user', data)
		.success(function(response) {
			location.path('/login');
			console.log("SUCCESS::" + response);
		})
		.error(function(response) {
			console.log("ERROR::: " + response);
		});
	};
}]);