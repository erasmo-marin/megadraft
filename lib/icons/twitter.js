"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016, Globo.com (https://github.com/globocom)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var _default = function (_React$Component) {
    _inherits(_default, _React$Component);

    function _default() {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    _createClass(_default, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "svg",
                _extends({}, this.props, { width: "24", height: "24", viewBox: "0 0 512 512" }),
                _react2.default.createElement(
                    "g",
                    { fill: "currentColor", fillRule: "evenodd" },
                    _react2.default.createElement("path", { id: "XMLID_22_", className: "st0", d: "M161 464.1c193.2 0 298.9-160.1 298.9-298.9 0-4.5 0-9-.3-13.7 20.6-14.9 38.2-33.2 52.4-54.5-19.1 8.5-39.5 14.1-60.4 16.5 22-13.2 38.4-33.7 46.3-58.1-20.6 12.2-43.2 20.9-66.7 25.5-39.8-42.2-106.3-44.3-148.6-4.5-27.3 25.7-38.9 63.9-30.4 100.4C167.7 172.6 89 132.6 35.7 67.1 7.8 115.1 22 176.5 68.1 207.3c-16.7-.5-33.1-5-47.7-13.2v1.3c0 50 35.3 93 84.3 103-15.4 4.2-31.6 4.8-47.4 1.8 13.8 42.7 53.2 72.1 98.1 72.9-37.3 29.2-83.2 45.1-130.4 45.1-8.4 0-16.7-.5-25.1-1.4 48.1 30.9 104 47.3 161.1 47.3" })
                )
            );
        }
    }]);

    return _default;
}(_react2.default.Component);

exports.default = _default;