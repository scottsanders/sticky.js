(function($) {

    "use strict";

    $.fn.sticky = function(options) {

        var defaults = {}

        var $this = this,
            settings = $.extend(defaults, options);

        var init = function($element) {

            var $target = $($element.data("scroll-with"));
                
            $(window).scroll(function(){
                
                if($target.height() < $element.height())
                    return;
                
                var stickyTop = $target.offset().top - ($target.outerHeight(true) - $target.height()),
                    stickyBottom = stickyTop + $target.height() - $element.height(),
                    windowTop = $(this).scrollTop();
                

                if (windowTop > stickyBottom) {
                    $element.removeClass('js-sticky').addClass('js-stuck');
                } else if (stickyTop < windowTop) {
                    $element.removeClass('js-stuck').addClass('js-sticky');
                } else {
                    $element.removeClass('js-sticky').removeClass('js-stuck');
                }

            });

        };


        return this.each(function() {

            init($(this));

        });

    };

}(jQuery));
