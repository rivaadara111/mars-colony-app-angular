(function() {
  'use strict';

  angular
    .module('red')
    .controller('LoginCntrl', LoginCntrl);

  /** @ngInject */ //injecting $http request as an argument to the LoginCntrl
  function LoginCntrl($scope, $http, $state, $rootScope, $cookies) {

    var GET_JOBS_URL =
          'https://red-wdp-api.herokuapp.com/api/mars/jobs'; //signifying this is a constant value by using capitals
    var POST_USER_URL =
          'https://red-wdp-api.herokuapp.com/api/mars/colonists';

    $scope.user = {}; //<-- use this in our post request when we do the sign in};


//fetch the jobs using GET REQUEST. all get requests will follow this format.
  $http({
    method: 'GET',
    url: GET_JOBS_URL
  }).then(function(response){
      $scope.jobs = response.data.jobs;
  }, function(error){
    console.log(error);
  });

  //syntax for making get request in angular. takes an object as an argument,
 //makes a promise with then, which takes 2 functions as an arg, first function
 //gets called on a successful request (paramater of respose from server),
 // the 2nd on a failed request(with paramater of error)..
 //a promise is a deferred function that runs it's option on the return value of the function it depends on
 //here it is waiting for the http request before running the response or error functions
 //we use promises for functions that are asynchronist (dont know how long its gonna take, eg. a http request,)
 $cookies.putObject('mars_user', undefined);

 $scope.showValidation = false;

 $scope.login = function(event){
  event.preventDefault();

  if ($scope.loginForm.$invalid){
      $scope.showValidation = true;
  } else {
  $http({
    method: 'POST',
    url: POST_USER_URL,
    data: { 'colonist' : $scope.user } //data holds the value of the object that we're going to send to the api
  }).then(function(response){
    $cookies.putObject('mars_user', response.data.colonist);
    $state.go('encounters');
  }, function(error){
    console.log(error);
    });
  }

  };

}

})();
