"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.formatSnapshotData = formatSnapshotData;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// import { IQuestionQuery } from 'bh-common-native-types/src/Interfaces/Questions';
// import { ILectureQuery } from 'bh-common-native-types/src/Interfaces/Lectures';
// import { IFixMe } from 'bh-common-native-types/src/Interfaces';
var fetch = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params) {
    var snapshots, query, db, orderBy, filter, isLanguage, isFilter, isSpeaker;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = params.query, db = params.db, orderBy = params.orderBy, filter = params.filter;

            if (!(!query || !db)) {
              _context.next = 3;
              break;
            }

            throw new Error('Something went wrong!');

          case 3:
            isLanguage = query.language && query.language !== '' && query.language !== 'Any';
            isFilter = query.filter && query.filter !== '';
            isSpeaker = query.speaker && query.speaker !== '';

            if (!(isLanguage && isSpeaker)) {
              _context.next = 10;
              break;
            }

            _context.next = 9;
            return db.where('channelId', '==', query.speaker).where('language', '==', query.language).orderBy(orderBy, 'desc').limit(20).get();

          case 9:
            snapshots = _context.sent;

          case 10:
            if (!isSpeaker) {
              _context.next = 16;
              break;
            }

            _context.next = 13;
            return db.where('channelId', '==', query.speaker).orderBy(orderBy, 'desc').limit(20).get();

          case 13:
            snapshots = _context.sent;
            _context.next = 31;
            break;

          case 16:
            if (!isFilter) {
              _context.next = 22;
              break;
            }

            _context.next = 19;
            return db.where(filter, '==', query.filter).orderBy(orderBy, 'desc').limit(20).get();

          case 19:
            snapshots = _context.sent;
            _context.next = 31;
            break;

          case 22:
            if (!isLanguage) {
              _context.next = 28;
              break;
            }

            _context.next = 25;
            return db.where('language', '==', query.language).orderBy(orderBy, 'desc').limit(20).get();

          case 25:
            snapshots = _context.sent;
            _context.next = 31;
            break;

          case 28:
            _context.next = 30;
            return db.orderBy(orderBy, 'desc').limit(20).get();

          case 30:
            snapshots = _context.sent;

          case 31:
            return _context.abrupt("return", formatSnapshotData(snapshots));

          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetch(_x) {
    return _ref.apply(this, arguments);
  };
}();

var paginate = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params) {
    var snapshots, query, db, orderBy, filter, isLanguage, isFilter, isSpeaker, secondCaseKey, singularFilterKey, secondCaseValue, singularFilterValue;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            query = params.query, db = params.db, orderBy = params.orderBy, filter = params.filter;

            if (!(!query || !db)) {
              _context2.next = 3;
              break;
            }

            throw new Error('Something went wrong!');

          case 3:
            isLanguage = query.language && query.language !== '';
            isFilter = query.filter && query.filter !== '';
            isSpeaker = query.speaker && query.speaker !== '';

            if (!(isLanguage && isFilter && isSpeaker)) {
              _context2.next = 12;
              break;
            }

            _context2.next = 9;
            return db.where(filter, '==', query.filter).where('channelId', '==', query.speaker).where('language', '==', query.language).orderBy(orderBy, 'desc').startAfter(query.lastVisible).limit(20).get();

          case 9:
            snapshots = _context2.sent;
            _context2.next = 43;
            break;

          case 12:
            if (!(isLanguage && isFilter)) {
              _context2.next = 18;
              break;
            }

            _context2.next = 15;
            return db.where(filter, '==', query.filter).where('language', '==', query.language).orderBy(orderBy, 'desc').startAfter(query.lastVisible).limit(20).get();

          case 15:
            snapshots = _context2.sent;
            _context2.next = 43;
            break;

          case 18:
            if (!(isLanguage && isSpeaker)) {
              _context2.next = 24;
              break;
            }

            _context2.next = 21;
            return db.where('channelId', '==', query.speaker).where('language', '==', query.language).orderBy(orderBy, 'desc').startAfter(query.lastVisible).limit(20).get();

          case 21:
            snapshots = _context2.sent;
            _context2.next = 43;
            break;

          case 24:
            if (!(isFilter && isSpeaker)) {
              _context2.next = 30;
              break;
            }

            _context2.next = 27;
            return db.where(filter, '==', query.filter).where('language', '==', query.language).orderBy(orderBy, 'desc').startAfter(query.lastVisible).limit(20).get();

          case 27:
            snapshots = _context2.sent;
            _context2.next = 43;
            break;

          case 30:
            if (!(isFilter || isSpeaker || isLanguage)) {
              _context2.next = 40;
              break;
            }

            secondCaseKey = isSpeaker ? 'channelId' : 'language';
            singularFilterKey = isFilter ? filter : secondCaseKey;
            secondCaseValue = isSpeaker ? query.speaker : query.language;
            singularFilterValue = isFilter ? query.filter : secondCaseValue;
            _context2.next = 37;
            return db.where(singularFilterKey, '==', singularFilterValue).orderBy(orderBy, 'desc').startAfter(query.lastVisible).limit(20).get();

          case 37:
            snapshots = _context2.sent;
            _context2.next = 43;
            break;

          case 40:
            _context2.next = 42;
            return db.orderBy(orderBy, 'desc').startAfter(query.lastVisible).limit(20).get();

          case 42:
            snapshots = _context2.sent;

          case 43:
            return _context2.abrupt("return", formatSnapshotData(snapshots));

          case 44:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function paginate(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

function formatSnapshotData(snapshots) {
  var latestDoc = snapshots.docs[snapshots.docs.length - 1];
  var payload = [];
  snapshots.forEach(function (doc) {
    var data = _objectSpread(_objectSpread({}, doc.data()), {}, {
      id: doc.id
    });

    if (payload.some(function (item) {
      return item.title && item.title == data.title;
    })) {
      return;
    }

    payload.push(data);
  });
  return {
    payload: payload,
    updatedLastVisible: latestDoc
  };
}

var _default = {
  fetch: fetch,
  paginate: paginate
};
exports["default"] = _default;