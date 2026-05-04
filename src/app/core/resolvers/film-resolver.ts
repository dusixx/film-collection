import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { FilmService } from '../services/film-service';

const TITLE_FOR_INVALID_ID = '404';

export const filmTitleResolver: ResolveFn<string> = (route) => {
  const filmService = inject(FilmService);
  const id = Number(route.paramMap.get('id'));

  return filmService.getFilmById(id)?.title ?? TITLE_FOR_INVALID_ID;
};
