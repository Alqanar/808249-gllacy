/*находим в разметке кнопку, клик по которой покажет модальное окно, записывам её в переменную*/
var buttonConacts = document.querySelector(".contacts__orange-button");
/*находим модальное окно, которое будет появляться, запиываем его в переменную, добавляем в CSS класс, кторый будет отвечать за display: block модального окна*/
var modalFeedback = document.querySelector(".modal-feedback");
/*так как кнопка закрытия модального окна у нас находится в модальном окне, которое у нас уже записано в переменную, то осуществляем поиск не по document, а по уже записанной переменной*/
var modalClose = modalFeedback.querySelector(".modal-feedback__close");
/*кроме модального окна по кнопке buttonConacts у нас должен появляться overlay, находим его в HTML и задаем переменную*/
var overlay = document.querySelector(".modal-overlay");
/*сделаем так, чтобы при открытии формы фокус автоматически устанавливался в поле имени, находим это поле и задаем переменную*/
var modalFormName = modalFeedback.querySelector("#modal-feedback__user-name");
/*нахдим форму в модальном окне и записываем ее в переменную*/
var modalForm = modalFeedback.querySelector(".modal-feedback__form");
/*при валидации формы будем проверять на заполняемость всех полей, поэтоу находим оставшиеся два поля и записываем их в переменные*/
var modalFormEmail = modalFeedback.querySelector("#modal-feedback__e-mail");
var modalFormFeedback = modalFeedback.querySelector("#modal-feedback__feedback");


/*ловим клик (событие) по кнопке открытия модального окна, которую мы записали ранее в переменную buttonConacts*/
buttonConacts.addEventListener("click", function (evt) {
  /*отменяем стандартное действие при нажатии на кнопку*/
  evt.preventDefault();
  /*с помощью метода classList.add добавляем новый класс к модальному окну по клику на кнопку открытия*/
  modalFeedback.classList.add("modal-feedback--show");
  /*с помощью метода classList.add добавляем класс с display: block к overlay по клику на кнопку открытия*/
  overlay.classList.add("modal-overlay--show");
  /*cтавим фокус в поле ввода имени при открытии модального окна.*/
  modalFormName.focus();
});

/*ловим клик (событие) по кнопке закрытия модального окна, которую мы записали ранее в переменную modalClose*/
modalClose.addEventListener("click", function (evt) {
  /*отменяем стандартное действие при нажатии на кнопку*/
  evt.preventDefault();
  /*с помощью метода classList.remove удаляем по клику на кнопку закрытия добавленный ранее класс к модальному окну*/
  modalFeedback.classList.remove("modal-feedback--show");
  /*с помощью метода classList.remove удаляем по клику на кнопку закрытия добавленный ранее класс к overlay*/
  overlay.classList.remove("modal-overlay--show");
  /*удаляем modal-error*/
  modalFeedback.classList.remove("modal-error");
});

/*ловим клик (событие) по overlay*/
overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.remove("modal-feedback--show");
  overlay.classList.remove("modal-overlay--show");
  modalFeedback.classList.remove("modal-error");
});

/*добавляем обработчик события, который будет отлавливать нажатие кнопки ESC и в случае, если модальное окно открыто, закрывать его.*/
window.addEventListener("keydown", function (evt) {
  /*если нажали на кнопку с кодом 27 (код кнопки escape 27)*/
  if (evt.keyCode === 27) {
    /*отменяем стандартное действие при нажатии на escape*/
    evt.preventDefault();
    /*если modalFeedback содержит (contains) класс modal-feedback--show, то удаляет его у него и у overlay, а также удаляем modal-error*/
    if (modalFeedback.classList.contains("modal-feedback--show")) {
      modalFeedback.classList.remove("modal-feedback--show");
      overlay.classList.remove("modal-overlay--show");
      modalFeedback.classList.remove("modal-error");
    }
  }
});

/*добавим валидацию формы*/
modalForm.addEventListener("submit", function (evt) {
  /*отменим отправку формы, если какое-то из полей незаполнено.*/
  if (!modalFormName.value || !modalFormEmail.value || !modalFormFeedback.value) {
    /*ловим событие отправки формы и отменяем стандартное действие*/
    evt.preventDefault();
    modalFeedback.classList.remove("modal-error");
    /*сброс анимации. "Что делает эта дополнительная строка кода, попросите браузер предоставить вам информацию о dom. Но для того, чтобы узнать, что такое offsetWidth, браузер должен отказаться от своего плана пакетной обработки изменений и выполнить оплату страницы прямо сейчас. В текущем состоянии нет класса run-animation, который является изменением, и поэтому анимация получает сброс. И позже, когда функция завершится, он снова выполнит вычисления и увидит, что вы сделали еще одно изменение относительно того, когда оно предоставило вам offsetWidth, поэтому оно тоже применяется."*/
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    /*если форма не валидна, добавим модальному окну класс ошибки*/
    modalFeedback.classList.add("modal-error");
  }
});

document.addEventListener("DOMContentLoaded", function(evt) {
  ymaps.ready(init);
  function init() { 
    var myMap = new ymaps.Map("map", {
      center: [59.93858261303607,30.326133675949112],
      zoom: 17,
      controls: []
    });
    var myPlacemark = new ymaps.Placemark([59.93863106417265,30.3230545], {
      hintContent: "Gllacy-shop",
    });
    myMap.geoObjects.add(myPlacemark);
  }
});
