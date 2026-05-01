import { isError, isString } from '@app/shared/utils/type-guards.utils';

const ERR_UNKNOWN_ERROR = 'unknown error';

export const getErrorMessage = (e: unknown): string => {
  return isError(e) ? e.message : isString(e) ? e : ERR_UNKNOWN_ERROR;
};
