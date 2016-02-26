(function() {
  'use strict';

  angular
    .module('red')
    .controller('ReportCntrl', ReportCntrl);

  /** @ngInject */
  function ReportCntrl($scope, $http, $state, $filter, $cookies) {
    var GET_ALIENS_URL=
      'https://red-wdp-api.herokuapp.com/api/mars/aliens';


  $scope.showValidation = false;

  $scope.report = {
    colonist_id: $cookies.getObject('mars_user').id,
    date: $filter('date')(new Date(), 'yyyy-MM-dd')
};

  $http({
    method: 'GET',
    url: GET_ALIENS_URL,
    data: {encounter: $scope.report}
  }).then(function(response){
    console.log(response);
    $scope.aliens = response.data.aliens;
    $state.go('encounters');
}, function(error){
    console.log(error);
});

  }

})();
