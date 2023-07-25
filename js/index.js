(function ($) {

  $.fn.extend({

    textFX: function (message, options) {

      var defaults = {
        delay: 0,
        mspl: 26
      };

      var settings = $.extend(defaults, options);
      var letters = message.split('');

      var shuffle = function () {
          return Math.random() < 0.5 ? 1 : -1;
        };

      return this.each(function () {

        var $this = $(this);
        var order = [],
          output = [];
        var length = letters.length;

        $this.text('');

        for (var i = 0; i < length; i++) {
          output[i] = Math.random() < 0.1 ? '<span class="dud">🖥</span>' : '<span class="dud">📱</span>';
          order[i] = i;
        }

        order.sort(shuffle);

        var o = {
          t: 0
        };
        var n, p;

        $(o).delay(settings.delay).animate({
          t: 1
        }, {
          duration: settings.mspl * length,
          step: function () {
            p = Math.floor(o.t * length);
            if (order[p] !== null) {
              n = order[p];
              output[n] = letters[n];
              order[p] = null;
            }
            $this.html(output.join(''));
          },
          complete: function () {
            $this.html(message);
          }
        });

      });
    }
  });
})(jQuery);

/*
var txt01 = "Victor Namba";
document.write("<p>" + txt.fontcolor("#2C85FF") + "</p>");
*/

function go() {
  $('#tf1').textFX("Hello! I’m <v>Victor Namba</v>. Currently <v>Head of Designer</v> at Conductor, living in <v>São Paulo</v>.", {
    delay: 0
  });
};

go();