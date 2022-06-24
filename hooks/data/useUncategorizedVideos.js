"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var CHANNELS = {
  rabbimizrachi: 'UCY_RXl0nXVp4w3VpEwsNhUg',
  rabbireuven: 'UCi-fAdFBv83gUzBgKm3PAyw',
  rabbikahlon: 'UC5PoXpwCMBfuq1HbsnSWjmA'
};

var useUncategorizedVideos = function useUncategorizedVideos(Firebase, author) {
  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      paginating = _useState6[0],
      setPaginating = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      error = _useState8[0],
      setError = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      lastVisible = _useState10[0],
      setLastVisible = _useState10[1];

  var fetchData = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var d;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!loading) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              setLoading(true);
              setError(null);
              _context.prev = 4;
              _context.next = 7;
              return Firebase.lectures.fetchByQuery('General', 'playlist');

            case 7:
              d = _context.sent;
              setData(d.payload);

              if (d.updatedLastVisible) {
                setLastVisible(d.updatedLastVisible);
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](4);
              setError(_context.t0);

            case 15:
              _context.prev = 15;
              setLoading(false);
              return _context.finish(15);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 12, 15, 18]]);
    }));

    return function fetchData() {
      return _ref.apply(this, arguments);
    };
  }();

  var paginate = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var d;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!paginating) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              setPaginating(true);
              setError(null);
              _context2.prev = 4;
              _context2.next = 7;
              return Firebase.lectures.fetchByQuery('General', 'playlist', lastVisible);

            case 7:
              d = _context2.sent;
              // @ts-ignore
              setData(function (prevState) {
                return [].concat((0, _toConsumableArray2["default"])(prevState), (0, _toConsumableArray2["default"])(d.payload));
              });

              if (d.updatedLastVisible) {
                setLastVisible(d.updatedLastVisible);
              }

              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](4);
              setError(_context2.t0);

            case 15:
              _context2.prev = 15;
              setPaginating(false);
              return _context2.finish(15);

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[4, 12, 15, 18]]);
    }));

    return function paginate() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    fetchData();
  }, []);
  return {
    data: data,
    loading: loading,
    error: error,
    paginate: paginate,
    paginating: paginating
  };
};

var _default = useUncategorizedVideos;
exports["default"] = _default;