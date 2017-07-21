$(function () {
  "use strict";
  window.Input = function (el) {
    var me = this;
    var valid = false;
    var rule = {};
    var $input_error;

    me.validate = function (custom) {
      rule = $.extend({}, rule, custom);
      me.validator = new Validator(me.val, rule);
      valid = me.validator.is_valid();
      if (!valid) {
        $input_error.show();
      } else {
        $input_error.hide();
      }
    }

    init();

    function init() {
      store_el();
      parse_rule();
      listen();
    }

    function listen() {
      me.$el.on('keyup', function () {
        me.val = $(this).val();
        me.validate();
      })
    }

    function store_el() {
      if (el instanceof $) {
        me.$el = el;
      } else {
        me.$el = $(el);
      }

      $input_error = me.$el.next('.input-error')
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
