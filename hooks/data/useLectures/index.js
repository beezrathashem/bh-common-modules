"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLectures = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var useLectures = function useLectures(fb) {
  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      lastSnapshot = _useState2[0],
      setLastSnapshot = _useState2[1];

  var _useState3 = (0, _react.useState)({
    filter: '',
    language: 'English',
    speaker: '',
    playlistName: ''
  }),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      lectureQuery = _useState4[0],
      updateLectureQuery = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      paginating = _useState6[0],
      setPaginating = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      refreshing = _useState8[0],
      setRefreshing = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1];

  var _useState11 = (0, _react.useState)([]),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      data = _useState12[0],
      setData = _useState12[1];

  var fetchData = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var _yield$fb$lectures$fe, payload, updatedLastVisible;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fb.lectures.fetch(_objectSpread(_objectSpread({}, lectureQuery), {}, {
                lastVisible: null
              }));

            case 2:
              _yield$fb$lectures$fe = _context.sent;
              payload = _yield$fb$lectures$fe.payload;
              updatedLastVisible = _yield$fb$lectures$fe.updatedLastVisible;
              setLastSnapshot(updatedLastVisible);
              setData(payload);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchData() {
      return _ref.apply(this, arguments);
    };
  }();

  var onRefresh = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setRefreshing(true);
              _context2.prev = 1;
              _context2.next = 4;
              return fetchData();

            case 4:
              _context2.next = 9;
              break;

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](1);
              console.log('errerrerrerr', _context2.t0); // TODO: Handle error

            case 9:
              _context2.prev = 9;
              setRefreshing(false);
              return _context2.finish(9);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 6, 9, 12]]);
    }));

    return function onRefresh() {
      return _ref2.apply(this, arguments);
    };
  }();

  var onFetch = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setLoading(true);
              _context3.prev = 1;
              _context3.next = 4;
              return fetchData();

            case 4:
              _context3.next = 9;
              break;

            case 6:
              _context3.prev = 6;
              _context3.t0 = _context3["catch"](1);
              console.log('errerrerrerr', _context3.t0); // TODO: Handle error

            case 9:
              _context3.prev = 9;
              setLoading(false);
              return _context3.finish(9);

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 6, 9, 12]]);
    }));

    return function onFetch() {
      return _ref3.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    onFetch();
  }, [lectureQuery.language, lectureQuery.speaker, lectureQuery.filter, lectureQuery.playlistName]);

  var onPaginateLectures = /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
      var _yield$fb$lectures$pa, payload, updatedLastVisible;

      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              setPaginating(true);

              if (!paginating) {
                _context4.next = 3;
                break;
              }

              return _context4.abrupt("return");

            case 3:
              _context4.prev = 3;
              _context4.next = 6;
              return fb.lectures.paginate(_objectSpread(_objectSpread({}, lectureQuery), {}, {
                lastVisible: lastSnapshot
              }));

            case 6:
              _yield$fb$lectures$pa = _context4.sent;
              payload = _yield$fb$lectures$pa.payload;
              updatedLastVisible = _yield$fb$lectures$pa.updatedLastVisible;
              setLastSnapshot(updatedLastVisible); // @ts-ignore

              setData(function (prevState) {
                return [].concat((0, _toConsumableArray2["default"])(prevState), (0, _toConsumableArray2["default"])(payload));
              });
              _context4.next = 16;
              break;

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](3);
              console.log('errerrerrerr', _context4.t0); // TODO: handle error

            case 16:
              _context4.prev = 16;
              setPaginating(false);
              return _context4.finish(16);

            case 19:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[3, 13, 16, 19]]);
    }));

    return function onPaginateLectures() {
      return _ref4.apply(this, arguments);
    };
  }();

  return {
    onPaginateLectures: onPaginateLectures,
    onRefresh: onRefresh,
    refreshing: refreshing,
    loading: loading,
    lectureQuery: lectureQuery,
    data: data,
    paginating: paginating,
    updateLectureQuery: updateLectureQuery
  };
};

exports.useLectures = useLectures;