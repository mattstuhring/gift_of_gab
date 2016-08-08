(function() {
  'use strict';

  const app = angular.module('giftGab');

  app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'login.html',
        controller: 'AuthCtrl',
        controllerAs: 'authCtrl'
      })
      .when('/users/:id', {
        templateUrl: 'home.html',
        controller: 'PostCtrl',
        controllerAs: 'post'
      });
      // .when('/login', {
      //   templateUrl: 'login.html',
      //   controller: 'AuthCtrl',
      //   controllerAs: 'authCtrl'
      // });
  });
}());
