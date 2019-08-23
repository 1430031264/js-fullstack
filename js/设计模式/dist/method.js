"use strict";

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function log(target, name, descriptor) {
  // console.log(target,name,descriptor)
  var originalMethod = descriptor.value;

  descriptor.value = function () {
    console.log('add 被调用');
    return originalMethod.apply(void 0, arguments);
  };
} // function Operation () {}
// Operation.prototype.add() = {}
// defineProperty(Operation.prototype,add , {}) // 类中定义的方法一个一个加到Operation中


var Operation = (_class =
/*#__PURE__*/
function () {
  function Operation() {
    _classCallCheck(this, Operation);
  }

  _createClass(Operation, [{
    key: "add",
    value: function add(a, b) {
      return a + b;
    }
  }]);

  return Operation;
}(), (_applyDecoratedDescriptor(_class.prototype, "add", [log], Object.getOwnPropertyDescriptor(_class.prototype, "add"), _class.prototype)), _class);
var opt = new Operation(); // opt.add(1,2)

console.log('opt', opt.add(1, 2));
var obj = {};
Object.defineProperty(obj, 'add', {
  value: function value(a, b) {
    return a + b;
  }
});
console.log(obj.add(3, 4));