/*global $, jQuery*/


$(document).ready(function () {
  'use strict';

  var
    ScreenWidth = screen.width,
    ScreenHeight = screen.height;

  if (ScreenWidth < '768') {
    $(".main-nav__list").hide();
    $(".main-nav__toggle-btn").show();
  }

  $(".main-nav__toggle-btn").on("click", function () {
    $(".main-nav__toggle-btn").toggleClass("main-nav__toggle-btn--js-active");
    $(".main-nav__list").slideToggle("slow");
  });

});

/*_____etc hints_____*/
/*jQuery Datepicker(datepicker-ru.js - is needed from jQueryUI i18n dir)*/
/*
  $.datepicker.setDefaults($.datepicker.regional[""]);
  $.datepicker.setDefaults($.datepicker.regional["ru"]);

  $(function () {
    $('.input_dater').datepicker({
      dateFormat: 'dd MM yy',
      minDate: new Date()
    });
  });
  */
  /*event.preventDefault() gor IE9(event.returnValue = false)*/
  /*
  $.fn.eventPreventDefaultSafe = function () {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  };
*/
