import { NOT_AVAILABLE } from '../constants';

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
