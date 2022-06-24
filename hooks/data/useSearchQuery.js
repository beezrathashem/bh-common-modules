'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'));

var _react = require('react');

var _algoliasearch = _interopRequireDefault(require('algoliasearch'));

var _Errors = require('bh-common-modules/Errors');

// import { ISearchQuery } from 'bh-common-types/src/Interfaces/Lectures';
var saveSyncItems = /*#__PURE__*/ (function () {
  var _ref = (0, _asyncToGenerator2['default'])(
    /*#__PURE__*/ _regenerator['default'].mark(function _callee(storage, searchQuery, data) {
      return _regenerator['default'].wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              _context.next = 2;
              return storage.set(searchQuery.id, JSON.stringify(data));

            case 2:
              _context.next = 4;
              return storage.set(''.concat(searchQuery.id, '-updated-at'), JSON.stringify(searchQuery.updated_at));

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    }),
  );

  return function saveSyncItems(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();

var useSearchQuery = function useSearchQuery(_ref2) {
  var Firebase = _ref2.Firebase,
    searchQuery = _ref2.searchQuery,
    algolia_app_id = _ref2.algolia_app_id,
    algolia_search_key = _ref2.algolia_search_key,
    storage = _ref2.storage;

  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2['default'])(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2['default'])(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];

  var client = (0, _react.useMemo)(function () {
    return (0, _algoliasearch['default'])(algolia_app_id, algolia_search_key);
  }, []);
  var get_lectures = (0, _react.useMemo)(function () {
    return client.initIndex('get_lectures');
  }, []);

  var determineDataSet = /*#__PURE__*/ (function () {
    var _ref3 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee2(searchQuery) {
        var lastUpdatedAt, syncItems, res;
        return _regenerator['default'].wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                _context2.t0 = JSON;
                _context2.next = 3;
                return storage.get(''.concat(searchQuery.id, '-updated-at'));

              case 3:
                _context2.t1 = _context2.sent;
                lastUpdatedAt = _context2.t0.parse.call(_context2.t0, _context2.t1);

                if (!(searchQuery.updated_at === lastUpdatedAt)) {
                  _context2.next = 11;
                  break;
                }

                _context2.next = 8;
                return storage.get(searchQuery.id);

              case 8:
                syncItems = _context2.sent;

                if (!syncItems) {
                  _context2.next = 11;
                  break;
                }

                return _context2.abrupt('return', JSON.parse(syncItems));

              case 11:
                if (!searchQuery.isLatest) {
                  _context2.next = 17;
                  break;
                }

                _context2.next = 14;
                return Firebase.lectures.fetchLatest();

              case 14:
                res = _context2.sent;
                _context2.next = 32;
                break;

              case 17:
                if (!searchQuery.isFirebase) {
                  _context2.next = 23;
                  break;
                }

                _context2.next = 20;
                return Firebase.lectures.fetchByQuery(searchQuery.value);

              case 20:
                res = _context2.sent.payload;
                _context2.next = 32;
                break;

              case 23:
                if (!searchQuery.isByPlaylist) {
                  _context2.next = 29;
                  break;
                }

                _context2.next = 26;
                return Firebase.lectures.fetchByQuery(searchQuery.value, 'playlistId');

              case 26:
                res = _context2.sent.payload;
                _context2.next = 32;
                break;

              case 29:
                _context2.next = 31;
                return get_lectures.search(searchQuery.value, {
                  hitsPerPage: 15,
                });

              case 31:
                res = _context2.sent.hits;

              case 32:
                _context2.next = 34;
                return saveSyncItems(storage, searchQuery, res);

              case 34:
                return _context2.abrupt('return', res);

              case 35:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2);
      }),
    );

    return function determineDataSet(_x4) {
      return _ref3.apply(this, arguments);
    };
  })();

  var fetchData = /*#__PURE__*/ (function () {
    var _ref4 = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee3() {
        var res;
        return _regenerator['default'].wrap(
          function _callee3$(_context3) {
            while (1) {
              switch ((_context3.prev = _context3.next)) {
                case 0:
                  setLoading(true);
                  _context3.prev = 1;
                  _context3.next = 4;
                  return determineDataSet(searchQuery);

                case 4:
                  res = _context3.sent;
                  console.log({
                    res: res,
                  });
                  setData(res);
                  _context3.next = 13;
                  break;

                case 9:
                  _context3.prev = 9;
                  _context3.t0 = _context3['catch'](1);
                  console.log('ERR', _context3.t0);
                  (0, _Errors.handleError)(_context3.t0, 'searchQuery', 'fetchSearchQuery');

                case 13:
                  _context3.prev = 13;
                  setLoading(false);
                  return _context3.finish(13);

                case 16:
                case 'end':
                  return _context3.stop();
              }
            }
          },
          _callee3,
          null,
          [[1, 9, 13, 16]],
        );
      }),
    );

    return function fetchData() {
      return _ref4.apply(this, arguments);
    };
  })();

  (0, _react.useEffect)(function () {
    fetchData();
  }, []);
  return {
    data: data,
    loading: loading,
  };
};

var _default = useSearchQuery;
exports['default'] = _default;
