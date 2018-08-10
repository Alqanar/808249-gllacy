document.addEventListener('DOMContentLoaded', function(event) {
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
