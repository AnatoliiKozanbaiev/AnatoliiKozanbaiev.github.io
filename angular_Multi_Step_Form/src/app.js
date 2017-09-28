var formApp = angular.module('formApp', ['ngAnimate', 'ui.router', 'vsGoogleAutocomplete'])

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

        // route to show our basic form (/form)
            .state('form', {
                url: '/form',
                templateUrl: 'template/form.html',
                controller: 'formController'
            })

            // nested states
            // each of these sections will have their own view
            // url will be nested (/form/numbers)
            .state('form.numbers', {
                url: '/numbers',
                templateUrl: 'template/form-numbers.html'
            })

            // url will be /form/profile
            .state('form.profile', {
                url: '/profile',
                templateUrl: 'template/form-profile.html'
            })

            // url will be /form/resume
            .state('form.resume', {
                url: '/resume',
                templateUrl: 'template/form-resume.html'
            });

        // catch all route
        // send users to the form page
        $urlRouterProvider.otherwise('/form/numbers');
    });