"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useVideoViews = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _axios = _interopRequireDefault(require("axios"));
var useVideoViews = function useVideoViews(_ref) {
  var userId = _ref.userId,
    config = _ref.config,
    lectureId = _ref.lectureId;
  var _useState = (0, _react.useState)(null),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    views = _useState2[0],
    setViews = _useState2[1];
  var getViews = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var views;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _axios["default"].get("".concat(config.backend_endpoint, "/lectures/views?userId=").concat(userId, "&lectureId=").concat(lectureId));
            case 2:
              views = _context.sent;
              setViews(views);
            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function getViews() {
      return _ref2.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    getViews();
  }, []);
  return {
    views: views
  };
};
exports.useVideoViews = useVideoViews;