"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initFirebase = void 0;

var _db = require("./db");

var _questions = _interopRequireDefault(require("./questions"));

var _topics = _interopRequireDefault(require("./topics"));

var _lectures = _interopRequireDefault(require("./lectures"));

var _searchQueries = _interopRequireDefault(require("./searchQueries"));

var _livestreams = _interopRequireDefault(require("./livestreams"));

var _playlists = _interopRequireDefault(require("./playlists"));

var _speakers = _interopRequireDefault(require("./speakers"));

var initFirebase = function initFirebase(firestore) {
  var dp = (0, _db.initDB)(firestore);
  return {
    lectures: (0, _lectures["default"])(dp),
    questions: (0, _questions["default"])(dp),
    topics: (0, _topics["default"])(dp),
    speakers: (0, _speakers["default"])(dp),
    searchQueries: (0, _searchQueries["default"])(dp),
    livestreams: (0, _livestreams["default"])(dp),
    playlists: (0, _playlists["default"])(dp)
  };
};

exports.initFirebase = initFirebase;