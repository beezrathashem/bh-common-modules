"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSearchQueries = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var useSearchQueries = function useSearchQueries(fb, is_rm_app) {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    data = _useState4[0],
    setData = _useState4[1];
  var fetchQueries = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var _yield$fb$searchQueri, payload;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.prev = 1;
              _context.next = 4;
              return fb.searchQueries.fetch();
            case 4:
              _yield$fb$searchQueri = _context.sent;
              payload = _yield$fb$searchQueri.payload;
              setData(payload);
              _context.next = 12;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              console.log('errerrerrerr', _context.t0);
              // TODO: Handle error
            case 12:
              _context.prev = 12;
              setLoading(false);
              return _context.finish(12);
            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9, 12, 15]]);
    }));
    return function fetchQueries() {
      return _ref.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    fetchQueries();
  }, []);
  return {
    data: data,
    loading: loading
  };
};
exports.useSearchQueries = useSearchQueries;