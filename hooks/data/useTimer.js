"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTimer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var useTimer = function useTimer() {
  var _useState = (0, _react.useState)(Date.now()),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 1),
    t = _useState2[0];
  return t;
};
exports.useTimer = useTimer;