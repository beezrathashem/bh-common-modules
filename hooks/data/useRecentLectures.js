"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRecentLectures = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _AsyncItems = require("../../lib/AsyncItems");
var useRecentLectures = function useRecentLectures(_ref) {
  var storage = _ref.storage,
    lecture = _ref.lecture;
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var getLectures = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var resRaw, res, newLecture, dataToUpdate, filteredLectures;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(lecture && (lecture.isLiveVideo || lecture.is_live || lecture.lectureUrl.includes('mux')))) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              _context.next = 4;
              return storage.get(_AsyncItems.AsyncItems.recent_lectures);
            case 4:
              resRaw = _context.sent;
              res = JSON.parse(resRaw) || [];
              if (!(lecture && lecture.id)) {
                _context.next = 13;
                break;
              }
              newLecture = lecture;
              newLecture.description = '';
              dataToUpdate = res.filter(function (i) {
                return lecture.id !== i.id;
              });
              filteredLectures = [newLecture].concat((0, _toConsumableArray2["default"])(dataToUpdate));
              _context.next = 13;
              return storage.set(_AsyncItems.AsyncItems.recent_lectures, JSON.stringify(filteredLectures.slice(0, 5)));
            case 13:
              if (res) {
                setData(res);
              }
            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function getLectures() {
      return _ref2.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    getLectures();
  }, []);
  return {
    data: data
  };
};
exports.useRecentLectures = useRecentLectures;