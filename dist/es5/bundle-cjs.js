'use strict';

Object.defineProperty(exports, Symbol.toStringTag, {
  value: 'Module'
});
var tailwindMerge = require('tailwind-merge');
var clsx = require('clsx');
function cn() {
  for (var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++) {
    inputs[_key] = arguments[_key];
  }
  return tailwindMerge.twMerge(clsx(inputs));
}
exports.cn = cn;
//# sourceMappingURL=bundle-cjs.js.map
