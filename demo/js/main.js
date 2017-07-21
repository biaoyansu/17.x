$(function () {
  "use strict";
  var input = {};

  init(); // Boot entry.

  function init() {
    load_form();
  }

  function load_form(form_selector) {
    form_selector = form_selector || '';

    input = $(form_selector + ' input')
      .map(function (i, item) {
        return new Input(item);
      })
  }
});

// var usernameValidator =
//   new Validator('143', {
//     nullable: true,
//     maxlength: 12,
//     minlength: 2,
//     numeric: 2,
//     pattern: /^[a-zA-Z]+/,
//   })
//
// console.log('usernameValidator.isValid()', usernameValidator.is_valid());
