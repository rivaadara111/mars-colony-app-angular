(function() {
  'use strict';

  angular
    .module('red')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: false
    });
  //define different states of the app. tells angular what modules to pull out of the doc
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('login',{
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('encounters',{
        url: '/encounters',
        templateUrl: 'app/encounters/encounters.html',
        controller: 'EncountersCtrl'
      })
      .state('report',{
        url: '/report',
        templateUrl: 'app/report/report.html',
        controller: 'ReportCtrl'
      })
      .state('report-filed',{
        url: '/report-filed',
        templateUrl: 'app/report/report-filed.html',
        controller: 'ReportCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
