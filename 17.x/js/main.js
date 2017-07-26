$(function () {
  'use strict';

  /*选中页面中所有的input[data-rule]*/

  /*解析每一个input的验证规则*/

  /*验证*/
  var validator = new Validator('abcdef', {
    maxlength: 5,
  });

  // var result = validator.validate_max();
  // var result = validator.validate_min();
  var result = validator.validate_maxlength();
  console.log('result:', result);

});

