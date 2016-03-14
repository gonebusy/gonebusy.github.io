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
    angular.module('gb.docs', ['ngAnimate', 'ui.bootstrap']);
    angular.module('gb.docs').controller('DropdownCtrl', function ($scope, $log) {
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

    $(function() {

        // jQuery ready stuff.

    });

})(jQuery);
