$(function () {
  "use strict";
  var input = [];
  var $form = $('form');


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

  $form.submit(function (e) {
    var valid = true;
    e.preventDefault();
    var i;

    for (i = 0; i < input.length; i++) {
      input[i].dirty = true;
      if (!input[i].validate())
        valid = false;
    }

    if (valid)
      alert('注册成功！');
  })
});
