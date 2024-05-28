'use strict';

Object.defineProperty(exports, Symbol.toStringTag, {
  value: 'Module'
});
const tailwindMerge = require('tailwind-merge');
const clsx = require('clsx');
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx(inputs));
}
exports.cn = cn;
//# sourceMappingURL=bundle-cjs.js.map
