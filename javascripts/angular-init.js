---
---
// Angular app
var gbApp = angular.module('gb.docs', ['ngAnimate', 'ui.bootstrap', 'ui.router']);

// Angular Dropdown in Nav
gbApp.controller('DropdownController', function ($scope, $log) {
    $scope.status = {
        isopen: false
    };

    $scope.toggled = function(open) {
        $log.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };
});

// Angular Tab controller on API pages
gbApp.controller('TabsController', function ($scope) {
    $scope.tabs = [
        { title:'Dynamic Title 1', content:'Dynamic content 1' },
        { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
    ];

    $scope.guide_links = [
        { name: 'Overview', partial: 'overview' },
        { name: 'Getting Started', partial: 'getting_started' },
        { name: 'Entities', partial: 'entities' }
    ];

    $scope.reference_links = [
        { name: 'Bookings', partial: 'bookings' },
        { name: 'Categories', partial: 'categories' },
        { name: 'Pricing Models', partial: 'pricing_models' },
        { name: 'Resources', partial: 'resources' },
        { name: 'Schedules', partial: 'schedules' },
        { name: 'Search', partial: 'search' },
        { name: 'Services', partial: 'services' },
        { name: 'Users', partial: 'users' }
    ];

    $scope.model = {
        name: 'Tabs'
    };
});

// Angular UI-Router for API
gbApp.config(function($stateProvider, $urlRouterProvider, $locationProvider, $uiViewScrollProvider) {
    $uiViewScrollProvider.useAnchorScroll();
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('overview', {
            url: '/',
            templateUrl: "{{ site.baseurl }}/partials/guides/overview.html"
        })
        .state('getting_started', {
            url: '/getting_started',
            templateUrl: "{{ site.baseurl }}/partials/guides/getting_started.html"
        })
        .state('entities', {
            url: '/entities',
            templateUrl: "{{ site.baseurl }}/partials/guides/entities.html"
        })
        .state('bookings', {
            url: '/bookings',
            templateUrl: "{{ site.baseurl }}/partials/reference/bookings.html"
        })
        .state('categories', {
            url: '/categories',
            templateUrl: "{{ site.baseurl }}/partials/reference/categories.html"
        })
        .state('pricing_models', {
            url: '/pricing_models',
            templateUrl: "{{ site.baseurl }}/partials/reference/pricing_models.html"
        })
        .state('resources', {
            url: '/resources',
            templateUrl: "{{ site.baseurl }}/partials/reference/resources.html"
        })
        .state('schedules', {
            url: '/schedules',
            templateUrl: "{{ site.baseurl }}/partials/reference/schedules.html"
        })
        .state('search', {
            url: '/search',
            templateUrl: "{{ site.baseurl }}/partials/reference/search.html"
        })
        .state('services', {
            url: '/services',
            templateUrl: "{{ site.baseurl }}/partials/reference/services.html"
        })
        .state('users', {
            url: '/users',
            templateUrl: "{{ site.baseurl }}/partials/reference/users.html"
        });

    // enable HTML5 Mode for SEO
    // $locationProvider.html5Mode(true);
});
