angular.module('module')
.controller('appCtrl', function($scope, $state, $rootScope) {
	$scope.landing = function(){
		console.log('going to app.landing');
		$state.go('app.landing');
	};
	$scope.aboutUs = function(){
		console.log('going to app.aboutUs');
		$state.go('app.aboutUs');   
	};
	$scope.sportsStore = function(){
		// console.log('going to app.sportsStore')
		$state.go('app.sportsStore');   
	};
	// $scope.productList = function(){
		 
	// 	$state.go('app.productList');   
	// };	
});

