(function() {
  'use strict';

  angular
    .module('red')
    .controller('LoginCntrl', LoginCntrl);

  /** @ngInject */
  function LoginCntrl($scope, $http, $state) { //injecting $http request as an argument to the LoginCntrl
    var GET_JOBS_URL =
          'https://red-wdp-api.herokuapp.com/api/mars/jobs'; //signifying this is a constant value by using capitals
    var POST_USER_URL =
          'https://red-wdp-api.herokuapp.com/api/mars/colonists';

    $scope.user = {};                 //<-- use this in our post request when we do the sign in

//fetch the jobs using GET REQUEST. all get requests will follow this format.
  $http({
    method: 'GET',
    url: GET_JOBS_URL
  }).then(function(response){
      console.log(response);
      $scope.jobs = response.data.jobs;
  }, function(error){
    console.log(error);
    //TO-do: handle a
  });
  //syntax for making get request in angular. takes an object as an argument,
 //makes a promise with then, which takes 2 functions as an arg, first function
 //gets called on a successful request (paramater of respose from server),
 // the 2nd on a failed request(with paramater of error)..
 //a promise is a deferred function that runs it's option on the return value of the function it depends on
 //here it is waiting for the http request before running the response or error functions
 //we use promises for functions that are asynchronist (dont know how long its gonna take, eg. a http request,)

 $scope.login = function(event){
  event.preventDefault();

  $http({
    method: 'POST',
    url: POST_USER_URL,
    data: { 'colonist' : $scope.user
    } //data holds the value of the object that we're going to send to the api
  }).then(function(response){
    $state.go('encounters') ;
  }, function(error){
    console.log(error);
    });
  };

  }

})();
