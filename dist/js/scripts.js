const burger = document.querySelector(".burger"),
  menu = document.querySelector(".menu"),
  menuLink = document.querySelectorAll(".menu__ul"),
  exit = document.querySelector(".menu__exit"),
  overl = document.querySelector(".menu__overlay");

// Кнопка меню
burger.addEventListener("click", () => {
  menu.classList.add("active");
});
exit.addEventListener("click", () => {
  menu.classList.remove("active");
});
overl.addEventListener("click", () => {
  menu.classList.remove("active");
});
menuLink.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

// Линия с процентам и
const counters = document.querySelectorAll(".skills__footer-count"),
  linesSpan = document.querySelectorAll(".skills__footer-line span");

counters.forEach((item, index) => {
  linesSpan[index].style.width = item.innerHTML;
});

// Валидация формы
function formValidation(form) {
  $(form).validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 25,
      },
      email: {
        required: true,
        email: true,
      },
      text: {
        required: true,
        minlength: 5,
        maxlength: 800,
      },
      policy: {
        required: true,
      },
    },
    messages: {
      name: {
        required: "Пожалуйста, введите ваше имя",
        minlength: jQuery.validator.format("Минимальная длина {0} букв"),
        maxlength: jQuery.validator.format("Максимальная длина {0} букв"),
      },
      email: {
        required: "Пожалуйста, введите e-mail",
        email: "Пример почты name@pochta.ru",
      },
      text: {
        required: "Пожалуйста, введите сообщение",
        minlength: jQuery.validator.format("Минимальная длина {0} символов"),
        maxlength: jQuery.validator.format("Максимальная длина {0} символов"),
      },
      policy: {
        required: "Это обязательное условие",
      },
    },
  });
}
formValidation("#contact-form");

// Скроллинг вверх и вниз
$(window).scroll(function () {
  if ($(this).scrollTop() > 2700) {
    $(".scroll-up").fadeIn("fast");
    $(".scroll-down").fadeOut("fast");
  } else {
    $(".scroll-up").fadeOut("fast");
    $(".scroll-down").fadeIn("fast");
  }
});

// Почта mailer
$("form").submit(function (e) {
  e.preventDefault();
  if (!$(this).valid()) {
    return;
  }
  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize(),
  }).done(function () {
    $(this).find("input").val("");
    $(".form-thanks").fadeIn("fast");

    $("form").trigger("reset");

    $(".form-thanks").delay(3000).fadeOut("slow");
  });
  return false;
});
