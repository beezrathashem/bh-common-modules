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

var orderBy = 'date';
var filter = 'playlistId';

var _default = function _default(dp) {
  return {
    fetch: function () {
      var _fetch = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(lectureQuery) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _procedures["default"].fetch({
                  query: lectureQuery,
                  db: dp.lecturesDB,
                  orderBy: orderBy,
                  filter: filter
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
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
    paginate: function () {
      var _paginate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(lectureQuery) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _procedures["default"].paginate({
                  query: lectureQuery,
                  db: dp.lecturesDB,
                  orderBy: orderBy,
                  filter: filter
                });

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function paginate(_x2) {
        return _paginate.apply(this, arguments);
      }

      return paginate;
    }(),
    fetchById: function () {
      var _fetchById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
        var doc;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return dp.lecturesDB.doc(id).get();

              case 2:
                doc = _context3.sent;
                return _context3.abrupt("return", _objectSpread(_objectSpread({}, doc.data()), {}, {
                  id: doc.id
                }));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function fetchById(_x3) {
        return _fetchById.apply(this, arguments);
      }

      return fetchById;
    }(),
    updateLecture: function () {
      var _updateLecture = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, _ref) {
        var playlistId, playlist;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                playlistId = _ref.playlistId, playlist = _ref.playlist;
                _context4.next = 3;
                return dp.lecturesDB.doc(id).update({
                  playlistId: playlistId,
                  playlist: playlist
                });

              case 3:
                return _context4.abrupt("return", 'success');

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function updateLecture(_x4, _x5) {
        return _updateLecture.apply(this, arguments);
      }

      return updateLecture;
    }(),
    fetchByTitle: function () {
      var _fetchByTitle = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(title) {
        var snapshot;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return dp.lecturesDB.where('title', '==', title).limit(1).get();

              case 2:
                snapshot = _context6.sent;
                _context6.next = 5;
                return new Promise( /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(resolve) {
                    return _regenerator["default"].wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            if (!snapshot.empty) {
                              _context5.next = 3;
                              break;
                            }

                            resolve(null);
                            return _context5.abrupt("return");

                          case 3:
                            snapshot.forEach(function (doc) {
                              var docData = doc.data();
                              return resolve(_objectSpread(_objectSpread({}, docData), {}, {
                                id: doc.id
                              }));
                            });

                          case 4:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x7) {
                    return _ref2.apply(this, arguments);
                  };
                }());

              case 5:
                return _context6.abrupt("return", _context6.sent);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function fetchByTitle(_x6) {
        return _fetchByTitle.apply(this, arguments);
      }

      return fetchByTitle;
    }(),
    fetchByQuery: function () {
      var _fetchByQuery = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(query) {
        var searchKey,
            lastVisible,
            queryConstruct,
            snapshot,
            _args8 = arguments;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                searchKey = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : 'query';
                lastVisible = _args8.length > 2 ? _args8[2] : undefined;
                queryConstruct = dp.lecturesDB.where(searchKey, '==', query);

                if (lastVisible) {
                  queryConstruct = dp.lecturesDB.where(searchKey, '==', query).startAfter(lastVisible);
                }

                _context8.next = 6;
                return queryConstruct.limit(20).get();

              case 6:
                snapshot = _context8.sent;
                _context8.next = 9;
                return new Promise( /*#__PURE__*/function () {
                  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(resolve) {
                    return _regenerator["default"].wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            if (!snapshot.empty) {
                              _context7.next = 3;
                              break;
                            }

                            resolve([]);
                            return _context7.abrupt("return");

                          case 3:
                            resolve((0, _procedures.formatSnapshotData)(snapshot));

                          case 4:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7);
                  }));

                  return function (_x9) {
                    return _ref3.apply(this, arguments);
                  };
                }());

              case 9:
                return _context8.abrupt("return", _context8.sent);

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function fetchByQuery(_x8) {
        return _fetchByQuery.apply(this, arguments);
      }

      return fetchByQuery;
    }(),
    fetchLatest: function () {
      var _fetchLatest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10() {
        var limit,
            snapshot,
            data,
            _args10 = arguments;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                limit = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : 20;
                _context10.next = 3;
                return dp.lecturesDB.orderBy('date', 'desc').limit(limit).get();

              case 3:
                snapshot = _context10.sent;
                data = [];
                _context10.next = 7;
                return new Promise( /*#__PURE__*/function () {
                  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(resolve) {
                    return _regenerator["default"].wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            if (!snapshot.empty) {
                              _context9.next = 3;
                              break;
                            }

                            resolve(null);
                            return _context9.abrupt("return");

                          case 3:
                            snapshot.forEach(function (doc) {
                              var docData = doc.data();
                              data.push(_objectSpread(_objectSpread({}, docData), {}, {
                                id: doc.id
                              }));
                            });
                            return _context9.abrupt("return", resolve(data));

                          case 5:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  }));

                  return function (_x10) {
                    return _ref4.apply(this, arguments);
                  };
                }());

              case 7:
                return _context10.abrupt("return", _context10.sent);

              case 8:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function fetchLatest() {
        return _fetchLatest.apply(this, arguments);
      }

      return fetchLatest;
    }()
  };
};

exports["default"] = _default;