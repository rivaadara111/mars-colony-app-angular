(function() {
  'use strict';

  angular
    .module('red')
    .controller('ReportCntrl', ReportCntrl);

  /** @ngInject */
  function ReportCntrl($scope, $http, $state, $filter, $cookies) {
    var GET_ALIENS_URL=
      'https://red-wdp-api.herokuapp.com/api/mars/aliens';
    var POST_ENCOUNTER_URL=
      'https://red-wdp-api.herokuapp.com/api/mars/encounters';

  // $scope.encounter = {};

  $scope.encounter = {
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
    // $state.go('encounters');
}, function(error){
    console.log(error);
});

$cookies.putObject('alien_encounter', undefined);

$scope.showValidation = false;

$scope.submit = function(event){
 event.preventDefault();

 if ($scope.reportForm.$invalid){
     $scope.showValidation = true;
 } else {
 $http({
   method: 'POST',
   url: POST_ENCOUNTER_URL,
   data: { 'encounter' : $scope.encounter } //data holds the value of the object that we're going to send to the api
 }).then(function(response){
   $cookies.putObject('alien_encounter', response.data.encounters);
   $state.go('encounters');
 }, function(error){
   console.log(error);
   });
 }

 };

  }

})();
