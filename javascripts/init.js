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

    $(function() {
        // jQuery ready stuff.
        $('body').css('display','block');

        $('.close').click(function() {
            $('.alert').fadeOut(500);
        });

        var form = $('#subscribeForm');
        form.find('#submit').click(function() {
            var gotcha = $('input#gotcha').val();

            var email = $('input#email').val();
            if (!form[0].checkValidity()) {
                $('.alert').hide();
                $('.alert-block').fadeIn(500);
                $('input#email').focus();
                return false;
            };

            $.ajax({
                url: 'https://formspree.io/alex+gonebusy.github.io@gonebusy.com',
                method: 'POST',
                data: {
                    email: email,
                    _subject: "New Submission from gonebusy.github.io",
                    _gotcha: gotcha
                },
                dataType: "json",
                success: function() {
                    $('.alert').hide();
                    $('.alert-success').fadeIn(500);
                },
                error: function() {
                    $('.alert').hide();
                    $('.alert-error').fadeIn(500);
                }
            });
            return false;
        });
    });

})(jQuery);
