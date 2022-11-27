"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _apiHelpers = require("common-web/src/utils/api-helpers");
var _UploadUtils = require("bh-panel/utils/UploadUtils");
var CHANNELS = {
  rabbimizrachi: 'UCY_RXl0nXVp4w3VpEwsNhUg',
  rabbireuven: 'UCi-fAdFBv83gUzBgKm3PAyw',
  rabbikahlon: 'UC5PoXpwCMBfuq1HbsnSWjmA'
};
var useUnlistedVideos = function useUnlistedVideos(author) {
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var fetchData = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var res;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              setError(null);
              _context.prev = 2;
              _context.next = 5;
              return (0, _apiHelpers.fetchPostJSON)("".concat(_UploadUtils.BACKEND_URL[author], "/conversions/unlisted-videos"), {
                channel_id: CHANNELS[author]
              });
            case 5:
              res = _context.sent;
              setData(res.videos);
              _context.next = 12;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              setError(_context.t0);
            case 12:
              _context.prev = 12;
              setLoading(false);
              return _context.finish(12);
            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 9, 12, 15]]);
    }));
    return function fetchData() {
      return _ref.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    fetchData();
  }, []);
  return {
    data: data,
    loading: loading,
    error: error
  };
};
var _default = useUnlistedVideos;
exports["default"] = _default;