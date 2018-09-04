/*находим в разметке кнопку, клик по которой покажет модальное окно, записывам её в переменную*/
var buttonConacts = document.querySelector(".contacts__orange-button");
/*находим модальное окно, которое будет появляться, запиываем его в переменную, добавляем в CSS класс, кторый будет отвечать за display: block модального окна*/
var modalFeedback = document.querySelector(".modal-feedback");
/*так как кнопка закрытия модального окна у нас находится в модальном окне, которое у нас уже записано в переменную, то осуществляем поиск не по document, а по уже записанной переменной*/
var modalClose = modalFeedback.querySelector(".modal-feedback__close");
/*кроме модального окна по кнопке buttonConacts у нас должен появляться overlay, находим его в HTML и задаем переменную*/
var overlay = document.querySelector(".modal-overlay");
/*сделаем так, чтобы при открытии формы фокус автоматически устанавливался в поле имени, находим это поле и задаем переменную*/
var modalName = modalFeedback.querySelector("#modal-feedback__user-name");


/*ловим клик (событие) по кнопке открытия модального окна, которую мы записали ранее в переменную buttonConacts*/
buttonConacts.addEventListener("click", function (evt) {
  /*отменяем стандартное действие при нажатии на кнопку*/
  evt.preventDefault();
  /*с помощью метода classList.add добавляем новый класс к модальному окну по клику на кнопку открытия*/
  modalFeedback.classList.add("modal-feedback--show");
  /*с помощью метода classList.add добавляем класс с display: block к overlay по клику на кнопку открытия*/
  overlay.classList.add("modal-overlay--show");
  /*cтавим фокус в поле ввода имени при открытии модального окна.*/
  modalName.focus();
});

/*ловим клик (событие) по кнопке закрытия модального окна, которую мы записали ранее в переменную modalClose*/
modalClose.addEventListener("click", function (evt) {
  /*отменяем стандартное действие при нажатии на кнопку*/
  evt.preventDefault();
  /*с помощью метода classList.remove удаляем по клику на кнопку закрытия добавленный ранее класс к модальному окну*/
  modalFeedback.classList.remove("modal-feedback--show");
  /*с помощью метода classList.remove удаляем по клику на кнопку закрытия добавленный ранее класс к overlay*/
  overlay.classList.remove("modal-overlay--show");
});



document.addEventListener('DOMContentLoaded', function(evt) {
  ymaps.ready(init);
  function init(){ 
    var myMap = new ymaps.Map('map', {
      center: [59.93858261303607,30.326133675949112],
      zoom: 17,
      controls: []
    });
    var myPlacemark = new ymaps.Placemark([59.93863106417265,30.3230545], {
      hintContent: 'Gllacy-shop',
    });
    myMap.geoObjects.add(myPlacemark);
  }
});
