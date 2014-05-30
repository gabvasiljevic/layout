angular.module("istim").controller("FriendsController", ['$scope', '$http', function(scope, http, routeParams){

	scope.friendlist = [];
	scope.api_url = "http://stim-friends.jit.su/session/getFriendList/"+routeParams.id;
	
	if (!scope.session.sessionUser)
 		scope.session.sessionUser = { id: '533aa6ce3c5e079e34968cd5' }
 	
 		
	http.get(scope.api_url)
		.success(function(data) {
			scope.friendlist = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

}]);
