"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleError = void 0;
var _BugSnag = require("./BugSnag");
var handleError = function handleError(error, page, functionName) {
  (0, _BugSnag.bugsnagReport)(error, page, functionName);
};
exports.handleError = handleError;