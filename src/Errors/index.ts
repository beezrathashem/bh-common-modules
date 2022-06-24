import { bugsnagReport } from './BugSnag';

export const handleError = (error: Error, page: string, functionName: string) => {
  bugsnagReport(error, page, functionName);
};
