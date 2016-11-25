---
---
(function($) {

    skel.breakpoints({
        xlarge: "(max-width: 1680px)",
        large:  "(max-width: 1280px)",
        medium: "(max-width: 980px)",
        small:  "(max-width: 736px)",
        xsmall: "(max-width: 480px)"
    });

    skel.layout({
        reset: "full",
        containers: true,
        grid: true,
        breakpoints: {
            xlarge: {
                containers: "90%"
            },
            large: {
                containers: "90%",
                grid: {
                    gutters: [ '0', '2.5em' ]
                }
            },
            medium: {
                containers: "90%"
            },
            small: {
                containers: "95%",
                grid: {
                    gutters: [ '0', '1.25em' ]
                }
            },
            xsmall: {
                grid: { gutters: 10 }
            }
        }
    });

    skel.viewport({
        width: 1280,
        scalable: true,
        breakpoints: {
            large: {
                scalable: false
            },
            medium: {
                width: "device-width"
            },
            small: {
                width: "device-width"
            },
            xsmall: {
                width: "device-width"
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
