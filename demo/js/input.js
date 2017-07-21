$(function () {
  "use strict";
  window.Input = function (el) {
    var me = this;
    var valid = false;
    var rule = {};
    var $input_error;
    var name;

    me.validate = function (custom) {
      rule = $.extend({}, rule, custom);
      me.validator = new Validator(me.val, rule);
      valid = me.validator.is_valid();

      if (!valid && me.val) {
        $input_error.slideDown(150);
      } else {
        $input_error.slideUp(150);
      }
    }

    init();

    function init() {
      store_el();
      parse_rule();
      listen();
    }

    function listen() {
      function on_change() {
        me.val = $(this).val();
        me.validate();
      }

      me.$el
        .keyup(on_change)
        .click(on_change)
    }

    function store_el() {
      if (el instanceof $) {
        me.$el = el;
      } else {
        me.$el = $(el);
      }

      name = me.$el.attr('name');
      $input_error = $('#input-error-' + name);
    }


    function parse_rule() {
      var $el = me.$el;

      var r = $el.data('rule');
      if (!r)
        return;

      r = r.split('|');
      for (let i = 0; i < r.length; i++) {
        var item = r[i].split(':');
        rule[item[0]] = item[1];
      }

      console.log('rule:', rule);

    }
  }
})
