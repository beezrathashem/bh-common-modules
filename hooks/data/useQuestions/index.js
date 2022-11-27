"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var useQuestions = function useQuestions(fb) {
  var user_id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
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
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    refreshing = _useState8[0],
    setRefreshing = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    lastSnapshot = _useState10[0],
    setLastSnapshot = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    error = _useState12[0],
    setError = _useState12[1];
  var _useState13 = (0, _react.useState)({
      language: '',
      filter: '',
      speaker: '',
      isUnanswered: false,
      user_id: user_id
    }),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    questionQuery = _useState14[0],
    updateQuestionQuery = _useState14[1];
  var fetchData = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var query, res;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.prev = 1;
              query = user_id ? fb.questions.fetchUser : fb.questions.fetch;
              _context.next = 5;
              return query(_objectSpread(_objectSpread({}, questionQuery), {}, {
                lastVisible: null
              }));
            case 5:
              res = _context.sent;
              console.log({
                res: res
              });
              setData(res.payload);
              setLastSnapshot(res.updatedLastVisible);
            case 9:
              _context.prev = 9;
              setLoading(false);
              return _context.finish(9);
            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1,, 9, 12]]);
    }));
    return function fetchData() {
      return _ref.apply(this, arguments);
    };
  }();
  var refresh = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var query, res;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setRefreshing(true);
              _context2.prev = 1;
              query = user_id ? fb.questions.fetchUser : fb.questions.fetch;
              _context2.next = 5;
              return query(_objectSpread(_objectSpread({}, questionQuery), {}, {
                lastVisible: null
              }));
            case 5:
              res = _context2.sent;
              setData(res.payload);
              setLastSnapshot(res.updatedLastVisible);
            case 8:
              _context2.prev = 8;
              setRefreshing(false);
              return _context2.finish(8);
            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1,, 8, 11]]);
    }));
    return function refresh() {
      return _ref2.apply(this, arguments);
    };
  }();
  var fetchMore = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
      var query, res;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(data.length === 0)) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return");
            case 2:
              if (!paginating) {
                _context3.next = 4;
                break;
              }
              return _context3.abrupt("return");
            case 4:
              setPaginating(true);
              _context3.prev = 5;
              query = user_id ? fb.questions.fetchUser : fb.questions.paginate;
              _context3.next = 9;
              return query(_objectSpread(_objectSpread({}, questionQuery), {}, {
                lastVisible: lastSnapshot
              }));
            case 9:
              res = _context3.sent;
              if (res.updatedLastVisible) {
                setLastSnapshot(res.updatedLastVisible);
                // @ts-ignore
                setData(function (prevState) {
                  return [].concat((0, _toConsumableArray2["default"])(prevState), (0, _toConsumableArray2["default"])(res.payload));
                });
              }
              _context3.next = 16;
              break;
            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](5);
              console.log('wooops', _context3.t0);
            case 16:
              _context3.prev = 16;
              setPaginating(false);
              return _context3.finish(16);
            case 19:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[5, 13, 16, 19]]);
    }));
    return function fetchMore() {
      return _ref3.apply(this, arguments);
    };
  }();
  var submitQuestion = /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(question) {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!loading) {
                _context4.next = 2;
                break;
              }
              return _context4.abrupt("return");
            case 2:
              setError(null);
              setLoading(true);
              _context4.prev = 4;
              _context4.next = 7;
              return fb.questions.createQ(_objectSpread(_objectSpread({}, question), {}, {
                speaker: 'UCi-fAdFBv83gUzBgKm3PAyw',
                speaker_image_url: 'https://lh3.googleusercontent.com/-Im-7BLJyKts/AAAAAAAAAAI/AAAAAAAAAAo/HD1drokwFAc/photo.jpg'
              }));
            case 7:
              _context4.next = 12;
              break;
            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](4);
              setError(_context4.t0);
            case 12:
              _context4.prev = 12;
              setLoading(false);
              return _context4.finish(12);
            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[4, 9, 12, 15]]);
    }));
    return function submitQuestion(_x) {
      return _ref4.apply(this, arguments);
    };
  }();
  var answerQuestion = /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(question) {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!loading) {
                _context5.next = 2;
                break;
              }
              return _context5.abrupt("return");
            case 2:
              setError(null);
              setLoading(true);
              _context5.prev = 4;
              _context5.next = 7;
              return fb.questions.answerQ(question);
            case 7:
              _context5.next = 12;
              break;
            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](4);
              setError(_context5.t0);
            case 12:
              _context5.prev = 12;
              setLoading(false);
              return _context5.finish(12);
            case 15:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[4, 9, 12, 15]]);
    }));
    return function answerQuestion(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();
  var deleteQuestion = /*#__PURE__*/function () {
    var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(question) {
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (!loading) {
                _context6.next = 2;
                break;
              }
              return _context6.abrupt("return");
            case 2:
              setError(null);
              setLoading(true);
              _context6.prev = 4;
              _context6.next = 7;
              return fb.questions.deleteQ(question);
            case 7:
              setData(data.filter(function (i) {
                return i.id !== question.id;
              }));
              _context6.next = 13;
              break;
            case 10:
              _context6.prev = 10;
              _context6.t0 = _context6["catch"](4);
              setError(_context6.t0);
            case 13:
              _context6.prev = 13;
              setLoading(false);
              return _context6.finish(13);
            case 16:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[4, 10, 13, 16]]);
    }));
    return function deleteQuestion(_x3) {
      return _ref6.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    fetchData();
  }, [questionQuery.filter, questionQuery.isUnanswered]);
  return {
    data: data,
    loading: loading,
    refresh: refresh,
    refreshing: refreshing,
    paginating: paginating,
    fetchMore: fetchMore,
    questionQuery: questionQuery,
    updateQuestionQuery: updateQuestionQuery,
    error: error,
    submitQuestion: submitQuestion,
    deleteQuestion: deleteQuestion,
    answerQuestion: answerQuestion
  };
};
var _default = useQuestions;
exports["default"] = _default;