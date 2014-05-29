angular.module("istim").controller("LogoutController", ['$scope', '$http', '$location', function(scope, http, location){
	http.post(scope.urlApiUser + 'auth/logout', {}, {
              withCredentials: true
           })
	.success(function(response) {
		scope.session.authenticated = false;
		scope.session.sessionUser = null;
		console.log(response);
		location.path('/login');
	})
	.error(function(response) {
		console.log("ERROR::: " + response);
	});

}]);