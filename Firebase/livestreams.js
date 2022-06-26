"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _procedures = require("./procedures");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = function _default(dp) {
  return {
    fetch: function () {
      var _fetch = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var snapshot, formattedSnapshot;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return dp.livestreamsDB.get();

              case 2:
                snapshot = _context.sent;
                formattedSnapshot = (0, _procedures.formatSnapshotData)(snapshot);
                return _context.abrupt("return", _objectSpread(_objectSpread({}, formattedSnapshot), {}, {
                  payload: formattedSnapshot.payload.sort(function (a, b) {
                    return b.ordinal - a.ordinal;
                  })
                }));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function fetch() {
        return _fetch.apply(this, arguments);
      }

      return fetch;
    }(),
    fetchById: function () {
      var _fetchById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
        var doc;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return dp.livestreamsDB.doc(id).get();

              case 2:
                doc = _context2.sent;
                return _context2.abrupt("return", _objectSpread(_objectSpread({}, doc.data()), {}, {
                  id: doc.id
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function fetchById(_x) {
        return _fetchById.apply(this, arguments);
      }

      return fetchById;
    }(),
    fetchFirst: function () {
      var _fetchFirst = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var snapshot, formattedSnapshot;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return dp.livestreamsDB.get();

              case 2:
                snapshot = _context3.sent;
                formattedSnapshot = (0, _procedures.formatSnapshotData)(snapshot);
                return _context3.abrupt("return", formattedSnapshot.payload.length ? formattedSnapshot.payload[0] : null);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function fetchFirst() {
        return _fetchFirst.apply(this, arguments);
      }

      return fetchFirst;
    }()
  };
};

exports["default"] = _default;