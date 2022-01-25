const registerBtn = document.querySelector('#register-btn')
const registerForm = document.querySelector('#register-form')
const shadow = document.querySelector('#menu-shadow')

registerBtn.onclick = function() {
  registerForm.classList.toggle('show')
    shadow.classList.toggle('show')
}

shadow.onclick = function() {
  registerForm.classList.remove('show')
    shadow.classList.remove('show')
}

{
(function($) {
$(function() {
  
  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
  
});
})(jQuery);
}

$('.owl-carousel').owlCarousel({
  items: 1,
  loop:true,
  margin:10,
  nav:true,
})

const form = document.querySelector('.register-form')
const validateBtn = document.querySelector('#register-form-btn')
const successfulForm = document.querySelector('.successful-form')

form.addEventListener('submit', function (event) {
  event.preventDefault()
  successfulForm.classList.toggle('show')
    registerForm.classList.remove('show')
})
shadow.onclick = function() {
  successfulForm.classList.remove('show')
  registerForm.classList.remove('show')
  shadow.classList.remove('show')
}