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
        reset: "normalize",
        containers: 1200,
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

        // Methods/polyfills.

        // addEventsListener
        var addEventsListener=function(o,t,e){var n,i=t.split(" ");for(n in i)o.addEventListener(i[n],e)}

        // classList | (c) @remy | github.com/remy/polyfills | rem.mit-license.org
        !function(){function t(t){this.el=t;for(var n=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),i=0;i<n.length;i++)e.call(this,n[i])}function n(t,n,i){Object.defineProperty?Object.defineProperty(t,n,{get:i}):t.__defineGetter__(n,i)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var i=Array.prototype,e=i.push,s=i.splice,o=i.join;t.prototype={add:function(t){this.contains(t)||(e.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var n=0;n<this.length&&this[n]!=t;n++);s.call(this,n,1),this.el.className=this.toString()}},toString:function(){return o.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=t,n(Element.prototype,"classList",function(){return new t(this)})}}();

        // Vars.
        var $body = document.querySelector('body');

        // Nav.
        var $nav = document.querySelector('#nav'),
            $navToggle = document.querySelector('a[href="#nav"]'),
            $navClose;

        // Event: Prevent clicks/taps inside the nav from bubbling.
        addEventsListener($nav, 'click touchend', function(event) {
            event.stopPropagation();
        });

        // Event: Hide nav on body click/tap.
        addEventsListener($body, 'click touchend', function(event) {
            $nav.classList.remove('visible');
        });

        // Toggle.

        // Event: Toggle nav on click.
        $navToggle.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            $nav.classList.toggle('visible');
        });

        // Close.

        // Create element.
        $navClose = document.createElement('a');
        $navClose.href = '#';
        $navClose.className = 'close';
        $navClose.tabIndex = 0;
        $nav.appendChild($navClose);

        // Event: Hide on ESC.
        window.addEventListener('keydown', function(event) {
            if (event.keyCode == 27)
                $nav.classList.remove('visible');
        });

        // Event: Hide nav on click.
        $navClose.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            $nav.classList.remove('visible');
        });

    });

})(jQuery);
