// import Bugsnag from '@bugsnag/react-native';

export const bugsnagReport = (error: Error, page: string, functionName: string, component = 'null') => {
  try {
    // Bugsnag.notify(error, async report => {
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
