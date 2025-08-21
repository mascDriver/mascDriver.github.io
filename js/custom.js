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

  // ANIMATED-ITEM DYNAMIC ANIMATION
  function setAnimatedItemTiming() {
    var items = document.querySelectorAll('.animated-item');
    var count = items.length;
    if (count === 0) return;
    var duration = count * 1.5;
    items.forEach(function(item, idx) {
      item.style.animationDuration = duration + 's';
      item.style.animationDelay = (idx * duration / count) + 's';
    });
  }
  setAnimatedItemTiming();

})(jQuery);
$('#form-email').on('submit', function (e) {
  e.preventDefault()
  const button = $("#send-email-button")
  let old_text_button = button.val()
  button.val('Sending your email...')
  button.prop("disabled", true);
  button.css('background-color', 'grey')
  Email.send({
    SecureToken: "39a25dfe-87f6-421d-b378-5cdff3686249",
    To: 'diogoblibi@hotmail.com',
    From: 'diogobaltazardonascimento@outlook.com',
    Subject: `${this.name.value} deseja conversar com você.`,
    Body: `${this.message.value} \n email: ${this.email.value}`,
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
      button.val(old_text_button)
      button.prop("disabled", false);
      button.css('background-color', '#BF360C')
    })
})