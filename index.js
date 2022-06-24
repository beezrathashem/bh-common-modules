"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initFirebase = void 0;

var _Firebase = _interopRequireDefault(require("./Firebase"));

var _db = require("./Firebase/db");

var initFirebase = function initFirebase(firestore) {
  (0, _db.initDB)(firestore);
  return _Firebase["default"];
};

exports.initFirebase = initFirebase;