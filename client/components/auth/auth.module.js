'use strict';

angular.module('saveyourtimeApp.auth', [
  'saveyourtimeApp.constants',
  'saveyourtimeApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
