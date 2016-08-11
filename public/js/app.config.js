(function() {
  'use strict';

  const app = angular.module('giftGab');

  app.config(function($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'home.html',
        controller: 'PostCtrl',
        controllerAs: 'post'
      })
      // .when('/users/:id', {
      //   templateUrl: 'home.html',
      //   controller: 'PostCtrl',
      //   controllerAs: 'post'
      // })
      .when('/', {
        templateUrl: 'login.html',
        controller: 'AuthCtrl',
        controllerAs: 'authCtrl'
      });
  });
}());
