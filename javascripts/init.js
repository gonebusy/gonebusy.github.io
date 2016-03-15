---
---
(function($) {

    skel.init({
        reset: 'full',
        breakpoints: {

            // Global.
            global: {
                range: '*',
                href: '{{ site.baseurl }}/stylesheets/style.css',
                containers: 1400,
                grid: {
                    gutters: {
                        vertical: '4em',
                        horizontal: 0
                    }
                }
            },

            // XLarge.
            xlarge: {
                range: '-1680',
                href: '{{ site.baseurl }}/stylesheets/style-xlarge.css',
                containers: 1200
            },

            // Large.
            large: {
                range: '-1280',
                href: '{{ site.baseurl }}/stylesheets/style-large.css',
                containers: 960,
                grid: {
                    gutters: {
                        vertical: '2.5em'
                    }
                },
                viewport: {
                    scalable: false
                }
            },

            // Medium.
            medium: {
                range: '-980',
                href: '{{ site.baseurl }}/stylesheets/style-medium.css',
                containers: '90%',
                grid: {
                    collapse: 1
                }
            },

            // Small.
            small: {
                range: '-736',
                href: '{{ site.baseurl }}/stylesheets/style-small.css',
                containers: '90%',
                grid: {
                    gutters: {
                        vertical: '1.25em'
                    }
                }
            },

            // XSmall.
            xsmall: {
                range: '-480',
                href: '{{ site.baseurl }}/stylesheets/style-xsmall.css',
                grid: {
                    collapse: 2
                }
            }

        },
        plugins: {
            layers: {

                // Config.
                config: {
                    transform: true
                },

                // Navigation Panel.
                navPanel: {
                    animation: 'pushX',
                    breakpoints: 'medium',
                    clickToHide: true,
                    height: '100%',
                    hidden: true,
                    html: '<div data-action="moveElement" data-args="nav"></div>',
                    orientation: 'vertical',
                    position: 'top-left',
                    side: 'left',
                    width: 250
                },

                // Navigation Button.
                navButton: {
                    breakpoints: 'medium',
                    height: '4em',
                    html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span>',
                    position: 'top-left',
                    side: 'top',
                    width: '6em'
                }

            }
        }
    });

    // Angular Dropdown in Nav
    var gbApp = angular.module('gb.docs', ['ngAnimate', 'ui.bootstrap', 'ui.router']);
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
            { name: 'Overview', partial: '_partials/overview' },
            { name: 'Getting Started', partial: '_partials/getting_started' },
            { name: 'Entities', partial: '_partials/entities' }
        ];

        $scope.reference_links = [
            { name: 'Bookings', partial: '_partials/bookings' },
            { name: 'Categories', partial: '_partials/categories' },
            { name: 'Pricing Models', partial: '_partials/pricing_models' },
            { name: 'Resources', partial: '_partials/resources' },
            { name: 'Schedules', partial: '_partials/schedules' },
            { name: 'Search', partial: '_partials/search' },
            { name: 'Services', partial: '_partials/services' },
            { name: 'Users', partial: '_partials/users' }
        ];

        $scope.model = {
            name: 'Tabs'
        };
    });

    $(function() {
        // jQuery ready stuff.
    });

})(jQuery);
