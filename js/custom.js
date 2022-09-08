(function ($) {

  "use strict";

  // COLOR MODE
  $('.color-mode').click(function () {
    $('.color-mode-icon').toggleClass('active')
    $('body').toggleClass('dark-mode')
  })

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true
  });

  // SMOOTHSCROLL
  $(function () {
    $('.nav-link, .custom-btn-link').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });

  // TOOLTIP
  $('.social-links a').tooltip();

})(jQuery);
$('#form-email').on('submit', function (e) {
  e.preventDefault()
  const form = new FormData();
  form.append('from', this.email.value);
  form.append('to', 'diogoblibi@hotmail.com');
  form.append('subject', `Novo contato de interesse de ${this.name.value}.`);
  form.append('text', this.message.value);

  fetch('https://api.mailgun.net/v3/sandbox9fb84166311346cd9665bc697f580154.mailgun.org/messages', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + btoa('api:')
    },
    body: form
  })
    .then(response => response.json())
    .then(response => {
      $('#form-email').each(function () {
        this.reset();
      });
      Swal.fire({
        icon: 'success',
        title: 'Email successfully sent.',
        text: "I'll answer as soon as possible",
      })
    })
})