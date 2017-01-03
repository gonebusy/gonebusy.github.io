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
        { name: 'Entities', partial: 'entities' },
        { name: 'Quick Start', partial: 'quick_start' },
        { name: 'How to Use Categories', partial: 'create_category' },
        { name: 'How to Use Pricing Models', partial: 'create_pricing_model' },
        { name: 'Managing Schedules', partial: 'manage_schedules' },
        { name: 'Examples of Frequency', partial: 'examples_frequency', classes: 'nested' },
        { name: 'Examples of Recurs By', partial: 'examples_recurs_by', classes: 'nested' },
        { name: 'Examples of Occurrence', partial: 'examples_occurrence', classes: 'nested' },
        { name: 'Creating More Users', partial: 'create_user' },
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

    // keep selected Tab consistent with page (re-)load
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        if ( angular.isDefined( toState.data.activeTab ) ) {
            $scope.tabCtrl.activeTab = toState.data.activeTab;
        }
    });
});

// Angular UI-Router for API
gbApp.config(function($stateProvider, $urlRouterProvider, $locationProvider, $uiViewScrollProvider) {
    $uiViewScrollProvider.useAnchorScroll();
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('overview', {
            url: '/',
            templateUrl: "/partials/guides/overview.html",
            data : { activeTab : 0 }
        })
        .state('entities', {
            url: '/entities',
            templateUrl: "/partials/guides/entities.html",
            data : { activeTab : 0 }
        })
        .state('quick_start', {
            url: '/quick_start',
            templateUrl: "/partials/guides/quick_start.html",
            data : { activeTab : 0 }
        })
        .state('create_category', {
            url: '/create_category',
            templateUrl: "/partials/guides/create_category.html",
            data : { activeTab : 0 }
        })
        .state('create_pricing_model', {
            url: '/create_pricing_model',
            templateUrl: "/partials/guides/create_pricing_model.html",
            data : { activeTab : 0 }
        })
        .state('manage_schedules', {
            url: '/manage_schedules',
            templateUrl: "/partials/guides/manage_schedules.html",
            data : { activeTab : 0 }
        })
        .state('examples_frequency', {
            url: '/frequency_examples',
            templateUrl: "/partials/guides/examples_frequency.html",
            data : { activeTab : 0 }
        })
        .state('examples_recurs_by', {
            url: '/recurs_by_examples',
            templateUrl: "/partials/guides/examples_recurs_by.html",
            data : { activeTab : 0 }
        })
        .state('examples_occurrence', {
            url: '/occurrence_examples',
            templateUrl: "/partials/guides/examples_occurrence.html",
            data : { activeTab : 0 }
        })
        .state('create_user', {
            url: '/create_user',
            templateUrl: "/partials/guides/create_user.html",
            data : { activeTab : 0 }
        })
        .state('bookings', {
            url: '/bookings',
            templateUrl: "/partials/reference/bookings.html",
            data : { activeTab : 1 }
        })
        .state('categories', {
            url: '/categories',
            templateUrl: "/partials/reference/categories.html",
            data : { activeTab : 1 }
        })
        .state('pricing_models', {
            url: '/pricing_models',
            templateUrl: "/partials/reference/pricing_models.html",
            data : { activeTab : 1 }
        })
        .state('resources', {
            url: '/resources',
            templateUrl: "/partials/reference/resources.html",
            data : { activeTab : 1 }
        })
        .state('schedules', {
            url: '/schedules',
            templateUrl: "/partials/reference/schedules.html",
            data : { activeTab : 1 }
        })
        .state('search', {
            url: '/search',
            templateUrl: "/partials/reference/search.html",
            data : { activeTab : 1 }
        })
        .state('services', {
            url: '/services',
            templateUrl: "/partials/reference/services.html",
            data : { activeTab : 1 }
        })
        .state('users', {
            url: '/users',
            templateUrl: "/partials/reference/users.html",
            data : { activeTab : 1 }
        });

    // enable HTML5 Mode for SEO
    // $locationProvider.html5Mode(true);
});
