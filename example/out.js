//built with clientside 0.4.0 https://github.com/jgallen23/clientside
if (typeof __cs == 'undefined') {
  var __cs = { 
    map: {}, 
    libs: {},
    r: function(p) {
      var mod = __cs.libs[__cs.map[p]];
      if (!mod) {
        throw new Error(p + ' not found');
      }
      return mod;
    }
  };
  window.require = __cs.r;
}
__cs.map['./a'] = 'csbebf3768';
__cs.map['./b'] = 'csb3bd7f56';

//a.js
__cs.libs.csbebf3768 = (function(require, module, exports) {
var fnA = function() {
  return 'a';
};
module.exports = fnA;
return module.exports || exports;
})(__cs.r, {}, {});

//b.js
__cs.libs.csb3bd7f56 = (function(require, module, exports) {
var fnA = require('./a');
var fnB = function() {
  var a = fnA();
  return a + 'b';
};
module.exports = fnB;
return module.exports || exports;
})(__cs.r, {}, {});

//c.js
__cs.libs.cs349afabb = (function(require, module, exports) {
var fnA = require('./a');
var fnB = require('./b');
var a = fnA();
var b = fnB();
module.exports = {
  a: a,
  b: b
};
return module.exports || exports;
})(__cs.r, {}, {});

window['testing'] = __cs.libs.cs349afabb;
__cs.map['testing'] = 'cs349afabb';

