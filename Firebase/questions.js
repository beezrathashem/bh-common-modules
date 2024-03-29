"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _procedures = _interopRequireWildcard(require("./procedures"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var orderBy = 'timestamp';
var filter = 'topic';
var _default = function _default(dp) {
  return {
    fetch: function () {
      var _fetch = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(questionQuery) {
        var db;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                db = questionQuery.isUnanswered ? dp.unansweredQuestionsDB : dp.questionsDB;
                _context.next = 3;
                return _procedures["default"].fetch({
                  query: questionQuery,
                  db: db,
                  orderBy: orderBy,
                  filter: filter
                });
              case 3:
                return _context.abrupt("return", _context.sent);
              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function fetch(_x) {
        return _fetch.apply(this, arguments);
      }
      return fetch;
    }(),
    fetchUser: function () {
      var _fetchUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(questionQuery) {
        var lastVisible, db, baseQuery, query, doc;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                lastVisible = questionQuery.lastVisible;
                db = questionQuery !== null && questionQuery !== void 0 && questionQuery.isUnanswered ? dp.unansweredQuestionsDB : dp.questionsDB;
                baseQuery = db.where('user_id', '==', questionQuery.user_id);
                query = lastVisible ? baseQuery.startAfter(lastVisible) : baseQuery;
                _context2.next = 6;
                return query.limit(20).get();
              case 6:
                doc = _context2.sent;
                return _context2.abrupt("return", (0, _procedures.formatSnapshotData)(doc));
              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      function fetchUser(_x2) {
        return _fetchUser.apply(this, arguments);
      }
      return fetchUser;
    }(),
    paginate: function () {
      var _paginate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(questionQuery) {
        var db;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                db = questionQuery.isUnanswered ? dp.unansweredQuestionsDB : dp.questionsDB;
                _context3.next = 3;
                return _procedures["default"].paginate({
                  query: questionQuery,
                  db: db,
                  orderBy: orderBy,
                  filter: filter
                });
              case 3:
                return _context3.abrupt("return", _context3.sent);
              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      function paginate(_x3) {
        return _paginate.apply(this, arguments);
      }
      return paginate;
    }(),
    deleteQ: function () {
      var _deleteQ = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(question) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return dp.unansweredQuestionsDB.doc(question.id)["delete"]();
              case 2:
                return _context4.abrupt("return", _context4.sent);
              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
      function deleteQ(_x4) {
        return _deleteQ.apply(this, arguments);
      }
      return deleteQ;
    }(),
    answerQ: function () {
      var _answerQ = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(question) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return dp.questionsDB.doc(question.id).set(_objectSpread(_objectSpread({}, question), {}, {
                  timestamp: new Date().getTime()
                }));
              case 2:
                _context5.next = 4;
                return dp.unansweredQuestionsDB.doc(question.id)["delete"]();
              case 4:
                return _context5.abrupt("return", _context5.sent);
              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));
      function answerQ(_x5) {
        return _answerQ.apply(this, arguments);
      }
      return answerQ;
    }(),
    createQ: function () {
      var _createQ = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(question) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return dp.unansweredQuestionsDB.add(_objectSpread(_objectSpread({}, question), {}, {
                  timestamp: new Date().getTime()
                }));
              case 2:
                return _context6.abrupt("return", _context6.sent);
              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));
      function createQ(_x6) {
        return _createQ.apply(this, arguments);
      }
      return createQ;
    }(),
    fetchById: function () {
      var _fetchById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(id) {
        var doc;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return dp.questionsDB.doc(id).get();
              case 2:
                doc = _context7.sent;
                return _context7.abrupt("return", doc.data());
              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));
      function fetchById(_x7) {
        return _fetchById.apply(this, arguments);
      }
      return fetchById;
    }()
  };
};
exports["default"] = _default;