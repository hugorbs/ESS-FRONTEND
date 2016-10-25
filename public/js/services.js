'use strict';

/* Services */

angular.module('ess-app')
.factory('AuthService', ['$http', '$localStorage', '$window', function($http, $localStorage, $window) {
  // variables
	var baseUrl = "http://localhost:8080";
  var auth = {};

  auth.saveToken = function(token){
    $window.localStorage['ess-app-token'] = token;
  }

  auth.getToken = function(){
    return $window.localStorage['ess-app-token'];
  }

  auth.isLoggedIn = function(){
    var token = auth.getToken();

    if(token){
        var payload = JSON.parse($window.atob(token.split('.')[1]));

        return payload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  };

  auth.currentUser = function(){
    if(auth.isLoggedIn()){
      var token = auth.getToken();
      var user = JSON.parse($window.atob(token.split('.')[1]));
      return user;
    }
  };

  auth.login = function(user){
    return $http.post(baseUrl + '/login', user).success(function(data){
      auth.saveToken(data.token);
    });
  };

  auth.logOut = function(){
    $window.localStorage.removeItem('ess-app-token');
  };

  return auth;
}
]);

angular.module('ess-app')
.factory('UserService', ['$http', '$localStorage', '$window', function($http, $localStorage, $window) {
  // variables
	var baseUrl = "http://localhost:8080";
	var token = $window.localStorage['ess-app-token'];
	// public methods
	return {
	};
}
]);
