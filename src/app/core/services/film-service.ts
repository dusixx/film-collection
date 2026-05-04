import { computed, Injectable, signal } from '@angular/core';
import { Film } from '@app/core';
import filmsData from '@public/films.json';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private _films = signal<Film[]>(filmsData);

  public readonly films = this._films.asReadonly();

  public readonly favorites = computed<Film[]>(() => {
    return this._films().filter((film) => film.isFavorite);
  });

  public getFilmById(id: number): Film | undefined {
    return this._films().find((film) => film.id === id);
  }

  public toggleFavorite(...ids: number[]): void {
    this._films.update((films) => {
      return films.map<Film>((film) => {
        const { id, isFavorite } = film;
        return ids.includes(id) ? { ...film, isFavorite: !isFavorite } : film;
      });
    });
  }
}
