/* Application File */
angular.module('ess-app', [
  'ngStorage',
  'ngRoute'
])
.config(['$routeProvider', '$httpProvider', '$locationProvider', function ($routeProvider, $httpProvider, $locationProvider) {
  $routeProvider
    .when('/', {
        templateUrl: 'public/views/home.html',
        controller: 'MainCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
}]);
