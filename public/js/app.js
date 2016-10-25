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
    .when('/profile', {
        templateUrl: 'public/views/profile.html',
        controller: 'UserCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });

    //angular
  $httpProvider.interceptors.push(['$q', '$location', '$localStorage', '$window', function($q, $location, $localStorage, $window) {
        return {
                'request': function (config) {
                    config.headers = config.headers || {};

                    var isLoggedIn = false;
                    var token = $window.localStorage['ess-app-token'];


                    if(token){
                        var payload = JSON.parse($window.atob(token.split('.')[1]));

                        isLoggedIn = payload.exp > Date.now() / 1000;

                        if(!isLoggedIn){
                            $location.path('/');
                        } else {
                          if($location.path() == '/'){
                            $location.path('/profile');
                          }
                        }
                    } else {
                        $location.path('/');
                    }
                    return config;
                },
                'responseError': function(response) {
                    if(response.status === 401 || response.status === 403) {
                        $location.path('/');
                    }
                    return $q.reject(response);
                }
            };
        }]);
}]);
