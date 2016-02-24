(function() {
  'use strict';

  angular
    .module('red')
    .controller('ReportCntrl', ReportCntrl);

  /** @ngInject */
  function ReportCntrl($scope) {
      this.online = true;
      $scope.description = 'Angular Seed Application';
  }

})();
