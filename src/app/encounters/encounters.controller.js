(function() {
  'use strict';

  angular
    .module('red')
    .controller('EncountersCntrl', EncountersCntrl);

  /** @ngInject */
  function EncountersCntrl($scope, $http, $state) {
    var GET_ENCOUNTERS_URL=
  'https://red-wdp-api.herokuapp.com/api/mars/encounters';

  $scope.jobs = {};

  $http({
    method: 'GET',
    url: GET_ENCOUNTERS_URL
  }).then(function(response){
    $scope.encounters = response.data.encounters;
    // $state.go('report');
}, function(error){
    console.log(error);
});


  }

})();
