// Main javascript entry point
// Should handle bootstrapping/starting application

import $ from 'jquery'
import PiecePreview from '../_modules/piece-preview/piece-preview'

$(() => {
  new PiecePreview(document)

  let goto = ['kay', 'seagull.agency'].join('@')
  $('[data-email]').attr('href', ['mail', 'to:'].join('') + goto)
  $('[data-email]').text(goto)

  let $form = $('#mc-form'),
    $formInput = $form.find('input[type=email]'),
    $successMessage = $('[data-success]')

  $form.bind('submit', function(e){
    e.preventDefault()
    let email = $formInput.val()

    $formInput.attr('disabled', true)
    $formInput.attr('placeholder', 'Sending...')
    $formInput.val('')
    $.getJSON('http://xn--ault-feb.us8.list-manage.com/subscribe/post-json?u=58ea460a4c67e4f0690757646&id=2fc13e62df&c=?', {EMAIL: email}, function(){
      $form.animate({opacity: 0.0})
      $successMessage.removeClass('hidden').animate({opacity: 1.0})
    })
  })
})
