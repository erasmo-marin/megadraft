"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _superagent = require("superagent");

var _superagent2 = _interopRequireDefault(_superagent);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _jsonp = require("jsonp");

var _jsonp2 = _interopRequireDefault(_jsonp);

var _plugin = require("../../components/plugin");

var _icons = require("../../icons");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import TwitterBlockStyle from "./TwitterBlockStyle";

var TwitterBlock = function (_Component) {
  _inherits(TwitterBlock, _Component);

  function TwitterBlock(props) {
    _classCallCheck(this, TwitterBlock);

    var _this = _possibleConstructorReturn(this, (TwitterBlock.__proto__ || Object.getPrototypeOf(TwitterBlock)).call(this, props));

    _this.actions = [{ "key": "delete", "icon": _icons2.default.DeleteIcon, "action": _this.props.container.remove }];
    _this.state = {
      twittHtml: "<div>Loading</div>"
    };
    return _this;
  }

  _createClass(TwitterBlock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var url = "https://publish.twitter.com/oembed?url=" + this.props.data.src + "&align=center";
      (0, _jsonp2.default)(url, null, function (err, data) {
        if (err) {
          console.error(err.message);
        } else {
          _this2.setState({
            twittHtml: "<div>" + data.html + "</div>"
          });
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      twttr.widgets.load();
    }
  }, {
    key: "getTwittComponent",
    value: function getTwittComponent() {
      var twittContainer = {
        paddingTop: "56px",
        marginBottom: "-30px"
      };

      return _react2.default.createElement("div", { className: "twittContainer", style: twittContainer, dangerouslySetInnerHTML: { __html: this.state.twittHtml } });
    }
  }, {
    key: "isYoutubeUrl",
    value: function isYoutubeUrl(url) {
      if (url.indexOf("youtube.com") || url.indexOf("youtu.be")) return true;
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _plugin.CommonBlock,
        _extends({}, this.props, { actions: this.actions }),
        this.getTwittComponent()
      );
    }
  }]);

  return TwitterBlock;
}(_react.Component);

exports.default = TwitterBlock;