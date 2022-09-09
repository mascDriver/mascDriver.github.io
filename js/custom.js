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
  Email.send({
    SecureToken : "4579b334-cd7d-441b-88ce-2732d8ec61cc",
    To : 'diogobaltazardonascimento@outlook.com',
    From : this.email.value,
    Subject : `${this.name.value} deseja conversar com você.`,
    Body : this.message.value,
    })
    .then(response => {
      console.log(response)
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