'use strict';

window.Validator = function (val, custom) {
  var me = this;

  /* 初始规则 */
  var rule = {
    nullable: false
  };

  /* 通过自定义规则覆盖扩充初始规则 */
  rule = $.extend({}, rule, custom);

  var result = {
    valid: {},
    invalid: {},
  }

  me.is_valid = function () {

    if (me.validate_nullable()) {
      if (empty())
        return true;
    }

    for (var key in rule) {
      if (key == 'nullable')
        continue;

      if (!me['validate_' + key]())
        return false;
    }
    return true;
  }

  me.validate_pattern = function () {
    var pattern = new RegExp(rule.pattern)
    console.log('pattern:', pattern);

    return pattern.test(val)
  }

  me.validate_nullable = function () {
    if (val || (!val && rule.nullable))
      return true;
    return false;
  }

  me.validate_equal = function () {
    return val == rule.equal;
  }

  me.validate_maxlength = function () {
    return me.validate_length(false, rule.maxlength);
  }

  me.validate_max = function () {
    var v = parseFloat(val);
    return v <= rule.max;
  }

  me.validate_min = function () {
    var v = parseFloat(val);
    return v >= parseFloat(rule.min);
  }

  me.validate_numeric = function () {
    return $.isNumeric(val);
  }

  me.validate_minlength = function () {
    return me.validate_length(true, rule.minlength);
  }

  me.validate_length = function (greater, length) {
    var val_length = val.toString().length;
    length = parseInt(length);

    if (greater && val_length >= length) {
      return true;
    } else if (!greater && val_length <= length) {
      return true;
    }

    return false;
  }

  function empty() {
    return val === undefined || val === null || val === '';
  }
}
