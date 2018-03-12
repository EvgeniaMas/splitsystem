// YANDEX MAP

ymaps.ready(init);

var myMap, 

    myMap1,

    myMap2,

    myPlacemark;

function init(){ 

    myMap = new ymaps.Map("map", {

        center: [44.676116, 37.782905],

        zoom: 16,

        controls: []

    });

    myMap1 = new ymaps.Map("map1", {

        center: [44.875627, 37.325862],

        zoom: 16,

        controls: []

    }); 

    myMap2 = new ymaps.Map("map2", {

        center: [44.561211, 38.094524],

        zoom: 16,

        controls: []

    });  

    if($(window).width() > 767) {

        myMap.panTo([44.676116, 37.782905], {

            flying: true

        });

        myMap1.panTo([44.875627, 37.325862], {

            flying: true

        });

        myMap2.panTo([44.561211, 38.094524], {

            flying: true

        });

    } else {

        myMap.panTo([44.676116, 37.785405], {

            flying: true

        });

        myMap1.panTo([44.875627, 37.325862], {

            flying: true

        });

        myMap2.panTo([44.561211, 38.094524], {

            flying: true

        });

    };

    $(window).resize(function() {

        if($(window).width() > 767) {

            myMap.panTo([44.676116, 37.782905], {

                flying: true

            });

            myMap1.panTo([44.875627, 37.325862], {

                flying: true

            });

            myMap2.panTo([44.561211, 38.094524], {

                flying: true

            });

        } else {

            myMap.panTo([44.676116, 37.785405], {

                flying: true

            });

            myMap1.panTo([44.875627, 37.325862], {

                flying: true

            });

            myMap2.panTo([44.561211, 38.094524], {

                flying: true

            });

        };

    });

    myMap.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 10, top: 250 }}}));
    myMap1.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 10, top: 250 }}}));
    myMap2.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 10, top: 250 }}}));



    myPlacemark = new ymaps.Placemark([44.676116, 37.785405], {

        balloonContentHeader: 'LEVEL',

        balloonContentBody: 'Краснодарский край, г. Новороссийск, ул. Южная, 13',

        iconCaption: 'LEVEL'

    }, {

        iconLayout: 'default#image',

        iconImageHref: '/wp-content/themes/level/img/map_mark.png',

        iconImageSize: [43, 69],

        iconImageOffset: [-21.5, -69]

    });

    myPlacemark1 = new ymaps.Placemark([44.875627, 37.325862], {

        balloonContentHeader: 'LEVEL',

        balloonContentBody: 'Краснодарский край, г. Анапа, ул. Ленина, 154Б',

        iconCaption: 'LEVEL'

    }, {

        iconLayout: 'default#image',

        iconImageHref: '/wp-content/themes/level/img/map_mark.png',

        iconImageSize: [43, 69],

        iconImageOffset: [-21.5, -69]

    });

    myPlacemark2 = new ymaps.Placemark([44.561211, 38.094524], {

        balloonContentHeader: 'LEVEL',

        balloonContentBody: 'Краснодарский край, г. Геленджик, ул. Луначарского, 6',

        iconCaption: 'LEVEL'

    }, {

        iconLayout: 'default#image',

        iconImageHref: '/wp-content/themes/level/img/map_mark.png',

        iconImageSize: [43, 69],

        iconImageOffset: [-21.5, -69]

    });



    myMap.behaviors.disable('multiTouch');

    myMap.behaviors.disable('scrollZoom');

    myMap.geoObjects.add(myPlacemark);

    myMap1.behaviors.disable('multiTouch');

    myMap1.behaviors.disable('scrollZoom');

    myMap1.geoObjects.add(myPlacemark1);

    myMap2.behaviors.disable('multiTouch');

    myMap2.behaviors.disable('scrollZoom');

    myMap2.geoObjects.add(myPlacemark2);

    

    var isMobile = {

        Android: function() {

            return navigator.userAgent.match(/Android/i);

        },

        BlackBerry: function() {

            return navigator.userAgent.match(/BlackBerry/i);

        },

        iOS: function() {

            return navigator.userAgent.match(/iPhone|iPad|iPod/i);

        },

        Opera: function() {

            return navigator.userAgent.match(/Opera Mini/i);

        },

        Windows: function() {

            return navigator.userAgent.match(/IEMobile/i);

        },

        any: function() {

            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());

        }

    };

    if(isMobile.any()){

        myMap.behaviors.disable('drag');

        myMap1.behaviors.disable('drag');

        myMap2.behaviors.disable('drag');

    }

}