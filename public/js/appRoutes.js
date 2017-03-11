// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // InwardBillLogs page that will use the InwardBillLogController
        .when('/InwardBillLogs', {
            templateUrl: 'views/InwardBillLog.html',
            controller: 'InwardBillLogController'
        });

    $locationProvider.html5Mode(true);

}]);