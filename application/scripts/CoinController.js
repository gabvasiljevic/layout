var url_default = 'http://istimcoinvirtual.jit.su/coin';
angular.module("istim").controller("CoinController", ['$scope', '$http', function(scope, http){
	
	
	scope.setFormDataCash = function(value) {
		scope.formData = {};
		scope.formData.cash = value;
	}
	
	scope.createCoin = function() {
		http.post(url_default+'/', scope.formData)
			.success(function(data) {
				scope.formData = {};
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};
	scope.creditCoin = function(cash) {
		var url = url_default+'/credit?userId='+scope.formData.userId +'&cash='+scope.formData.cash;
		http.post(url)
			.success(function(data){
				scope.formData = {};
			})
			.error(function(data){
				console.log('Error: ' + data);
			});
	};
	scope.transferCoin = function() {
		var url = url_default+'/transfer?userId='+scope.formData.userId+'&cash='+scope.formData.cash+'&userDest='+scope.formData.userDest;
		http.post(url)
			.success(function(data){
				scope.formData = {};
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};
}]);
