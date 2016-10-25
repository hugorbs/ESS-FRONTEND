// public/js/controllers/MainCtrl.js
angular.module('ess-app')
.controller('MainCtrl',['$rootScope', '$scope', '$location', '$localStorage', 'AuthService', function($rootScope, $scope, $location, $localStorage, AuthService) {

  $scope.refreshData = function(){
    $scope.credentials = {};
    $scope.isLoggedIn = AuthService.isLoggedIn();
    $scope.currentUser = AuthService.currentUser();
  }

  $scope.refreshData();

  $scope.$on("userLoggedIn",function(event,args) {
     $scope.refreshData();
   });

  $scope.logIn = function(){
    AuthService.login($scope.credentials).error(function(error){
      $scope.error = error;
    }).then(function(){
      $rootScope.$broadcast('userLoggedIn');
      $location.path('/profile');
    });
  };

  $scope.logOut = function(){
    AuthService.logOut();
    $rootScope.$broadcast('userLoggedIn');
    $location.path('/');
  };

}]);
