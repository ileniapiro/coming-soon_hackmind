/*
 * A Design by Ilenia Piro
 * Author: Ilenia Piro
 * Author URL:
 * License: Copyright © 2020 Hackmind di Proietti Claudio
 */
$(function() {
  'use strict';

  var options = {
    wrapper: ".wrapper",
    minHeight: 500
  };

  function setHeight() {
    var documentHeight = $(window).height();

    if (documentHeight > options.minHeight) {
      $(options.wrapper).height(documentHeight);
    }
  }

  setHeight();

  $(window).resize(function() {
    setHeight();
  })

  $('.countdown').downCount({
    date: '05/01/2020 9:00:00',
    offset: +10
  }, function() {

  });


});
