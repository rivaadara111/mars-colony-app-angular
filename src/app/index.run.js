(function() {
  'use strict';

  angular
    .module('red')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state, $cookies) {
    $rootScope.$state = $state;

    $log.debug('Run block end!');

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
        $rootScope.stateName = toState.name;
        // $rootScope.user = $cookies.getObject('mars_user'); <-- use to set username in top
    });
  }

})();
