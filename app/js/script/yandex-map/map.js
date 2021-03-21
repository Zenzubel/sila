/////////////////start map///////////////////////
//устанавливать перед инициализацией MagicScroll иначе не отобразится карта
ymaps.ready(init);
var myMap;
  function init () {
    var myMap = new ymaps.Map("map", {
      center:[55.02176818641737,82.95640157449007],
      zoom: 18,
      // Выключаем все управление картой
      controls: []
    }); 
    var myGeoObjects = [];
    // Указываем координаты метки
    myGeoObjects = new ymaps.Placemark([55.02176818641737,82.95640157449007],{
      balloonContentHeader: 'ООО "Новая форма"',
      balloonContentBody: `
        - пошив спецодежды <br>
        - продажа спецодежды <br>
        - услуги ателье <br>
        ул. Бориса Богаткова, 101.
      `,
      balloonContentFooter: "+7-923-17-33-711",
    },{
      iconLayout: 'default#image',
      iconImageHref: 'images/favicon/favicon.png', 
      // Размеры иконки
      iconImageSize: [100, 100],
      // Смещение верхнего угла относительно основания иконки
      iconImageOffset: [-250, -50]
    });

    var clusterer = new ymaps.Clusterer({
      clusterDisableClickZoom: false,
      clusterOpenBalloonOnClick: false,
    });

    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
    // Отключим zoom
    myMap.behaviors.disable('scrollZoom');
  }
/////////////////end map///////////////////////