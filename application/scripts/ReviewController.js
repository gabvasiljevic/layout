var reviewPage = angular.module('review-page', []);

var url_default = 'https://reviewapi-t.jit.su/review';

function reviewController($scope, $http) {
	$scope.formData = {};
	$http.get(url_default+'/media')
		.success(function(data) {
			$scope.reviews = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});    
}
