(function() {
  'use strict';

  angular
    .module('red')
    .controller('ReportCntrl', ReportCntrl);

  /** @ngInject */
  function ReportCntrl($scope, $http) {
    var GET_ALIENS_URL=
  'https://red-wdp-api.herokuapp.com/api/mars/aliens';

  $scope.report = {};

  $http({
    method: 'GET',
    url: GET_ALIENS_URL
  }).then(function(response){
    console.log(response);
    $scope.aliens = response.data.aliens;
    // $state.go('report');
}, function(error){
    console.log(error);
});

  }

})();
