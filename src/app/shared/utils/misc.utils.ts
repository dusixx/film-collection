import { isError, isString } from '@app/shared/utils/type-guards.utils';
import { ERR_UNKNOWN_ERROR, NOT_AVAILABLE } from '../constants';

export const getErrorMessage = (e: unknown): string => {
  return isError(e) ? e.message : isString(e) ? e : ERR_UNKNOWN_ERROR;
};

export const minutesToDuration = (mins: number): string => {
  if (mins <= 0) {
    return NOT_AVAILABLE;
  }
  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;

  if (!minutes) {
    return `${hours}h`;
  }
  if (!hours) {
    return `${minutes}min`;
  }
  return `${hours}h ${minutes}min`;
};

export const rndInt = (min: number, max: number): number => {
  return Math.round(min + Math.random() * (max - min));
};

export const formatThousands = (num: number, separator = ' '): string => {
  const formatter = new Intl.NumberFormat('fr-FR', {
    maximumFractionDigits: 0,
  });
  return formatter.format(num).replace(/[^\d]/g, separator);
};
