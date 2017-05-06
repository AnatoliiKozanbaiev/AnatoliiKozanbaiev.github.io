'use strict';

// declare modules
angular.module('Authentication', []);
angular.module('Home', []);

angular.module('BasicHttpAuth', [
  'Authentication',
  'Home',
  'ngRoute',
  'ngCookies',
  'ngResource'

])

.config(['$routeProvider', function ($routeProvider) {

  $routeProvider
    .when('/login', {
      controller: 'LoginController',
      templateUrl: 'modules/authentication/views/login.html'
    })

    .when('/', {
      controller: 'HomeController',
      templateUrl: 'modules/home/views/home.html'
    })

    .otherwise({ redirectTo: '/login'})
}])

.run(['$rootScope', '$location', '$cookieStore', '$http',
  function ($rootScope, $location, $cookieStore, $http) {
    // keep user logged in after page refresh
    $rootScope.globals = $cookieStore.get('globals') || {};
    if ($rootScope.globals.currentUser) {
      $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      // redirect to login page if not logged in
      if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
        $location.path('/login');
      }
    });
}])

  .service('translationService', function($resource) {

    this.getTranslation = function($scope, language) {
      var languageFilePath = 'translation_' + language + '.json';
      $resource(languageFilePath).get(function (data) {
        $scope.translation = data;
      });
    };
  })

.controller('myController',['$scope', 'translationService',
  function ($scope, translationService){

    //Выполняем перевод, если произошло событие смены языка
    $scope.translate = function(){
      translationService.getTranslation($scope, $scope.selectedLanguage);
    };
    // Инициализация
    $scope.selectedLanguage = 'en';
    $scope.translate();

  }]);





