angular.module('module', ['ui.router', 'customFilters'])
.run(function($rootScope, $state) {
    

})
.filter("sanitize", ['$sce', function($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(htmlCode);
  };
}])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('app', {
            url: "/app",
            abstract:true,
            templateUrl: "templates/app.html",
            controller: 'appCtrl'
        })
        .state('app.landing', {
            url:'/landing',
            views: {
                'main': {
                    controller: 'landingController',
                    templateUrl:'templates/landing.html'
                }
            }
        })
         .state('app.aboutUs', {
            url:'/aboutUs',
            views: {
                'main': {
                    controller: 'aboutUsController',
                    templateUrl:'templates/aboutUs.html'
                }
            }
        })
         .state('app.sportsStore', {
            url:'/sportsStore',
            views: {
                'main': {
                    controller: 'sportsStoreController',
                    templateUrl:'templates/sportsStore.html'
                }
            }
        });
        //  .state('app.productList', {
        //     url:'/productList',
        //     views: {
        //         'main': {
        //             controller: 'productListControllers',
        //             templateUrl:'templates/sportsStore.html'
        //         }
        //     }
        // });
        //  .state('app.category2', {
        //     url:'/category2',
        //     views: {
        //         'main': {
        //             controller: 'category2Controller',
        //             templateUrl:'templates/category2.html'
        //         }
        //     }
        // })
        //  .state('app.category3', {
        //     url:'/category3',
        //     views: {
        //         'main': {
        //             controller: 'category3Controller',
        //             templateUrl:'templates/category3.html'
        //         }
        //     }
        // });
        //   .state('app.app', {
        //     url:'/app',
        //     views: {
        //         'main': {
        //             controller: 'app',
        //             templateUrl:'templates/app.html'
        //         }
        //     }
        // });

        
         
     $urlRouterProvider.otherwise('/app/landing');
});

