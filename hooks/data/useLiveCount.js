"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var useLiveCount = function useLiveCount() {
  var _useState = (0, _react.useState)(23),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  (0, _react.useEffect)(function () {
    // start count
    setCount(23);
  }, []);
  return {
    count: count
  };
};

var _default = useLiveCount;
exports["default"] = _default;