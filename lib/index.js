"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var xon = 0; //图片在x轴移动方向

var yon = 0; //图片在y轴移动方向

var step = 1; //移动距离

var Walk =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Walk, _React$Component);

  function Walk(props) {
    var _this;

    _classCallCheck(this, Walk);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Walk).call(this, props));
    _this.state = {
      X: document.body.clientWidth / 2,
      Y: document.body.clientHeight / 2
    };
    return _this;
  }

  _createClass(Walk, [{
    key: "floatP",
    value: function floatP() {
      var _this2 = this;

      var onChange = this.props.onChange;
      var _this$state = this.state,
          xPos = _this$state.X,
          yPos = _this$state.Y;
      var dom = this.refs.walk;
      var width = document.documentElement.clientWidth; //浏览器宽度

      var height = document.documentElement.clientHeight; //浏览器高度

      var Hoffset = dom.offsetHeight; //图片高度

      var Woffset = dom.offsetWidth; //图片宽度
      // dom.style.left = xPos + document.body.scrollLeft;//图片距离浏览器左侧位置
      // dom.style.top = yPos + document.body.scrollTop;//图片距离浏览器顶端位置

      if (yon == 0) {
        yPos = yPos + step; //图片在y轴方向上下移动
      } else {
        yPos = yPos - step;
      }

      if (yPos < 0) {
        //飘到顶端，沿y轴向下移动
        yon = 0;
        yPos = 0;
      }

      if (yPos >= height - Hoffset) {
        //飘到低端，沿y轴向上移动
        yon = 1;
        yPos = height - Hoffset;
      }

      if (xon == 0) {
        //x轴向右移动
        xPos = xPos + step;
      } else {
        xPos = xPos - step; //x轴向左移动
      }

      if (xPos < 0) {
        //飘到左侧时沿x轴向右移动
        xon = 0;
        xPos = 0;
      }

      if (xPos >= width - Woffset) {
        //飘到右侧时沿x轴向左移动
        xon = 1;
        xPos = width - Woffset;
      }

      var pos = {
        X: xPos,
        Y: yPos
      };

      if (typeof onChange === 'function') {
        onChange(pos);
      }

      this.setState(pos, function () {
        setTimeout(_this2.floatP.bind(_this2), 60); //定时调用。
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.floatP();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          X = _this$state2.X,
          Y = _this$state2.Y;
      var style = {
        position: 'absolute',
        width: 100,
        height: 100,
        left: X,
        top: Y
      };
      var children = this.props.children;
      return _react["default"].createElement("div", {
        ref: "walk",
        style: style
      }, " ", children);
    }
  }]);

  return Walk;
}(_react["default"].Component);

exports["default"] = Walk;