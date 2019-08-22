"use strict";

var _dec, _class, _dec2, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// function name (target) {
//   // 把原来的东西获取到
//   console.log(target)
//   target.Tname = 'lilei'
// }
// @name
// class Man {
// }
// console.log(Man.Tname)
function name(pName) {
  return function (target) {
    target.wName = pName;
  };
} // @ 后面接的就是一个方法


var Man = (_dec = name('lilei'), _dec(_class = function Man() {
  _classCallCheck(this, Man);
}) || _class);
var Woman = (_dec2 = name('hanmeimei'), _dec2(_class2 = function Woman() {
  _classCallCheck(this, Woman);
}) || _class2);
console.log(Man.wName);
console.log(Woman.wName);