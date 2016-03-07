'use strict';

angular.module('saveyourtimeApp', [
  'saveyourtimeApp.auth',
  'saveyourtimeApp.admin',
  'saveyourtimeApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
