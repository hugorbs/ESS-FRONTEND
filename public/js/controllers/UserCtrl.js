angular.module('ess-app')
.controller('UserCtrl',['$rootScope', '$scope', '$routeParams', '$document', '$location', 'AuthService', 'UserService', function($rootScope, $scope, $routeParams, $document, $location, AuthService, UserService) {
  $scope.G1_labels = ['GDI', 'ESS', 'PCOM', 'Sinais', 'Métodos'];
  $scope.G1_series = ['Faltas', 'Presenças'];

  $scope.G1_data = [
   [1, 3, 2, 6, 8],
   [18, 15, 12, 10, 6]
  ];

  $scope.G2_labels = ['Faltas', 'Presenças'];
  $scope.G2_data = [15, 40];

  $scope.G5_labels = ['Faltas', 'Presenças'];
  $scope.G5_data = [12, 40];
  $scope.G6_data = [25, 32];
  $scope.G7_data = [6, 45];
  $scope.G8_data = [20, 35];
  $scope.G9_data = [40, 10];

  $scope.G3_labels = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"];
  $scope.G3_series = ['Series A', 'Series B'];
  $scope.G3_data = [
    [10, 12, 6, 3, 18, 1, 7],
    [28, 48, 40, 19, 40, 30, 40]
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
