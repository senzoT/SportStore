
angular.module('module')
.constant("dataUrl","js/data.json")
.constant("productListActiveClass", "btn-primary")
.constant("productListPageCount", 3)
.controller('sportsStoreController', function ($scope,$rootScope, $state,$http,$filter, productListActiveClass, productListPageCount,dataUrl){
	// var data = {
	// 		products:[
	// 			{ name: "Product #1", description: "A product", category: "Category #1", price: 100 },
	// 			{ name: "Product #1", description: "A product", category: "Category #1", price: 100 },
	// 			{ name: "Product #1", description: "A product", category: "Category #1", price: 110 },
	// 			{ name: "Product #1", description: "A product", category: "Category #1", price: 110 },
	// 			{ name: "Product #1", description: "A product", category: "Category #1", price: 110 },
	// 			{ name: "Product #1", description: "A product", category: "Category #1", price: 110 },
	// 			{ name: "Product #1", description: "A product", category: "Category #1", price: 110 },
	// 			{ name: "Product #2", description: "A product", category: "Category #2", price: 210 },
	// 			{ name: "Product #3", description: "A product", category: "Category #3", price: 202 },
	// 			{ name: "Product #3", description: "A product", category: "Category #3", price: 202 },
	// 			{ name: "Product #4", description: "A product", category: "Category #4", price: 202 }
	// 		]
	// };
	// $scope.data=data;
		

	$scope.data = {};
	$http.get(dataUrl)
		.success(function (data) {
           $scope.data= data;
           console.log(data);
      })
	.error(function (error) {
		$scope.data.error = error;
	});




	//productListControllers.js
	
	// selectedCategory = sportsStore
		var sportsStore = null;

		$scope.selectedPage = 1;
		$scope.pageSize = productListPageCount;

		  $scope.sportsStore = function(newCategory) {
		    sportsStore = newCategory;
		    $scope.selectedPage = 1;
		  };

		  $scope.selectPage = function (newPage) {
			$scope.selectedPage = newPage;
			};

		  $scope.categoryFilterFn = function(product) {
		    return sportsStore === null || product.category == sportsStore;
		  };
		  $scope.getCategoryClass = function (category) {
		return sportsStore == category ? productListActiveClass : "";
		};

		$scope.getPageClass = function (page) {
		return $scope.selectedPage == page ? productListActiveClass : "";
		};


});
