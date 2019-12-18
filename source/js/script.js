'use strict';

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

function initMap() {
  var flag = {lat: 59.93, lng: 30.32};
  var map = new google.maps.Map (document.querySelector('.map'), {
    zoom: 16,
    center: flag,
    scrollwheel: false,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.BOTTOM_CENTER
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_CENTER
    },
    streetViewControl: true, //default
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP
    },
    fullscreenControl: true
  });
  var marker = new google.maps.Marker({
    position: flag,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Cat Energy',
    icon: {
      url: 'img/map-pin.png',
      scaledSize: new google.maps.Size(113, 97)
    }
  });
}

svg4everybody();
picturefill();
