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

  fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer SG.n-oxGOvxTLeD2yTER'+'FRUUQ.f3rSlZnW92Eu7rO'+'C30mTwgcRtYAjEr5pyboPYdXeBEI',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"personalizations": [{"to": [{"email": "diogoblibi@hotmail.com"}]}],"from": {"email": "diogobaltazardonascimento@outlook.com"},"subject": "Sending with SendGrid is Fun","content": [{"type": "text/plain", "value": "and easy to do anywhere, even with cURL"}]})
  })
    .then(response => response)
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