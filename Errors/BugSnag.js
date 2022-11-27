"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bugsnagReport = void 0;

// import Bugsnag from '@bugsnag/react-native';
var bugsnagReport = function bugsnagReport(error, page, functionName) {
  var component = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'null';

  try {// Bugsnag.notify(error, async report => {
    //   report.metadata = {
    //     account: {
    //       page,
    //       functionName,
    //       component,
    //     },
    //   };
    // });
  } catch (e) {
    return;
  }
};

exports.bugsnagReport = bugsnagReport;