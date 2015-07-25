/* jshint devel:true */

$(function() {
  'use strict';

  var $form = $('#mc-form'),
      $formInput = $form.find('input[type=email]'),
      $successMessage = $('[data-success]')

  $form.bind('submit', function(e){
    e.preventDefault()
    var email = $formInput.val()

    $formInput.attr('disabled', true)
    $formInput.attr('placeholder', 'Sending...')
    $formInput.val('')
    $.getJSON('http://xn--ault-feb.us8.list-manage.com/subscribe/post-json?u=58ea460a4c67e4f0690757646&id=2fc13e62df&c=?', {EMAIL: email}, function(){
      $form.animate({opacity: 0.0})
      $successMessage.removeClass('hidden').animate({opacity: 1.0})
    })
  })


  var goto = ['kay', 'seagull.agency'].join('@');
  $('[data-email]').attr('href', ['mail','to:'].join('') + goto)
  $('[data-email]').text(goto)

  $(window).on('mousemove', function(e) {
    $('[data-thumb]').offset({top: e.pageY - 100, left: e.pageX - 100})
  })
})
