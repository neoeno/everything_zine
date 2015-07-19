/* jshint devel:true */

$(function() {
  'use strict';

  $('#mc-form').submit(function() {
    $('#mc-form input').prop('disabled', true)
  });

  $('#mc-form').ajaxChimp({
      url: 'http://xn--ault-feb.us8.list-manage.com/subscribe/post?u=58ea460a4c67e4f0690757646&id=2fc13e62df',
      callback: function(resp) {
        if (resp.result === 'success') {
          $('#mc-form').animate({opacity: 0.0});
          $('[data-success]').removeClass('hidden').animate({opacity: 1.0});
        } else {
          alert('Something’s wrong. Is your email ok?')
          $('#mc-form input').prop('disabled', false)
        }
      }
  })

  var goto = ['kay', 'seagull.agency'].join('@');
  $('[data-email]').attr('href', ['mail','to:'].join('') + goto)
  $('[data-email]').text(goto)

  $(window).on('mousemove', function(e) {
    $('[data-thumb]').offset({top: e.pageY - 100, left: e.pageX - 100})
  })
})
