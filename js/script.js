/*global $, jQuery*/


$(document).ready(function () {
  'use strict';

  /*event.preventDefault() gor IE9(event.returnValue = false)*/
  $.fn.eventPreventDefaultSafe = function () {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  };
  /*-------------------------------------------------------*/

  $(".main-nav__list").hide();
  $(".main-nav__toggle-btn").show();

  $(".main-nav__toggle-btn").on("click", function () {
    if ($(".main-nav__list").hide()) {
      $(".main-nav__list").slideToggle("slow");
      $(".main-nav__toggle-btn").css({
        "background-image": "url('../img/icon-cross.svg')"
      });
    } else {
      $(".main-nav__list").slideToggle("slow");
      $(".main-nav__toggle-btn").css({
        "background-image": "url('../img/icon-menu.svg')"
      });
    }



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
