'use strict';

var phonecatApp = angular.module('phonecatApp', ['ngRoute', 'ngResource']);

phonecatApp.config(['$routeProvider', '$locationProvider', function ($routeProvide, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvide
        .when('/', {
            templateUrl: 'template/home.html',
            controller: 'PhoneListCtrl'
        })
        .when('/about', {
            templateUrl: 'template/about.html',
            controller: 'AboutCtrl'
        })
        .when('/contact', {
            templateUrl: 'template/contact.html',
            controller: 'ContactCtrl'
        })
        .when('/phones/:phoneId', {
            templateUrl: 'template/phone-detail.html',
            controller: 'PhoneDetailCtrl'
        })
        .when('/component', {
            templateUrl: 'template/component.html',
            controller: 'AlmostComponentCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

phonecatApp.constant('employees', [{
    firstName: 'Rima',
    lastName: 'George',
    location: 'San Francisco'
}, {
    firstName: 'Shaun',
    lastName: 'John',
    location: 'Germany'
}, {
    firstName: 'Rahul',
    lastName: 'Kurup',
    location: 'Bangalore'
}, {
    firstName: 'Samson',
    lastName: 'Davis',
    location: 'Canada'
}, {
    firstName: 'Shilpa',
    lastName: 'Agarwal',
    location: 'Noida'
}]);