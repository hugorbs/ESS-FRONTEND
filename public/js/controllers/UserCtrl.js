angular.module('ess-app')
.controller('UserCtrl',['$rootScope', '$scope', '$routeParams', '$document', '$location', 'AuthService', 'UserService', function($rootScope, $scope, $routeParams, $document, $location, AuthService, UserService) {
  $scope.G1_labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.G1_series = ['Series A', 'Series B'];

  $scope.G1_data = [
   [65, 59, 80, 81, 56, 55, 40],
   [28, 48, 40, 19, 86, 27, 90]
  ];

  $scope.G2_labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.G2_data = [300, 500, 100];

  $scope.G3_labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.G3_series = ['Series A', 'Series B'];
  $scope.G3_data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.G3_onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.G3_datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.G3_options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  }

  $scope.G4_labels =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

  $scope.G4_data = [
  [65, 59, 90, 81, 56, 55, 40],
  [28, 48, 40, 19, 96, 27, 100]
  ];
}]);
