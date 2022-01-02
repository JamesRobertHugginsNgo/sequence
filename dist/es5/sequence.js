"use strict";

var sequence = function () {
  var counter = 0;
  return function (prefix, suffix) {
    var separator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    prefix = prefix ? "".concat(prefix).concat(separator) : '';
    suffix = suffix ? "".concat(separator).concat(suffix) : '';
    return "".concat(prefix).concat(counter++).concat(suffix);
  };
}();
/* exported sequence */