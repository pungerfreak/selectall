/*
 * jQuery selectAll v0.1 - jQuery plugin
 * Copyright (c) 2010-2012 Daniel Greenlaw
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 */

(function($) {
  $.fn.selectAll = function(options) {
    options = $.extend({}, $.fn.selectAll.defaults, options);

    return this.each(function() {
      $$ = $(this);

      $$.find('input[type=checkbox][rel='+options.controller+']').each(function() {
        var controller = $(this);
        var controllees = $$
          .find('input[type=checkbox][rel!='+options.controller+'].'+controller.attr('class'));

        controller.click(function(e) {
          controllees.attr('checked', controller.attr('checked'));
        });

        controllees.click(function(e) {
          controller.attr('checked', controllees.not(':checked').length==0);
        });

        //set up initial value of controller
        controller.attr('checked', controllees.not(':checked').length==0);
      });
    });
  };

  $.fn.selectAll.defaults = {
      controller: 'select_all' //rel attribute on controller
  };
})(jQuery);
