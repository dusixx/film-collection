import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Film } from '@app/core';
import { RouteData } from '@app/shared';
import { FavoriteToggle } from '../favorite-toggle/favorite-toggle';

@Component({
  selector: 'app-film-card',
  imports: [RouterLink, FavoriteToggle],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  film = input.required<Film>();
  favoriteToggled = output<number>();

  filmsPath = `/${RouteData.Home.path}`;

  toggleFavorite(): void {
    this.favoriteToggled.emit(this.film().id);
  }
}
