angular.module('module')
.controller('aboutUsController', function ($scope, $state,$http){

	$http.get("./js/todo.json").success(function (data) {
		var jsonString = angular.toJson(data);
		// console.log(jsonString);
		$scope.todos = angular.fromJson(jsonString);
	});
	// console.log("This is about us controller");
});