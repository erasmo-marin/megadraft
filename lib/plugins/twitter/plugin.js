"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TwitterButton = require("./TwitterButton");

var _TwitterButton2 = _interopRequireDefault(_TwitterButton);

var _TwitterBlock = require("./TwitterBlock");

var _TwitterBlock2 = _interopRequireDefault(_TwitterBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  title: "Twitter",
  type: "twitter",
  buttonComponent: _TwitterButton2.default,
  blockComponent: _TwitterBlock2.default
};