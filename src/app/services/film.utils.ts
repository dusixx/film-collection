import { Film } from '@app/models/film.model';
import { hasOwnKeys, isBoolean, isPositiveInteger, isString } from '@app/shared/utils';

export const isFilm = (data: unknown): data is Film => {
  return (
    hasOwnKeys<Film>(
      data,
      'description',
      'duration',
      'genre',
      'id',
      'isFavorite',
      'posterUrl',
      'rating',
      'title',
      'year',
    ) &&
    isPositiveInteger(data.id) &&
    isPositiveInteger(data.year) &&
    isBoolean(data.isFavorite) &&
    isString(data.title)
  );
};

export const isFilms = (data: unknown): data is Film[] => {
  return Array.isArray(data) && data.every(isFilm);
};
