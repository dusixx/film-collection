import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Film } from '@app/core';
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

  toggleFavorite(): void {
    this.favoriteToggled.emit(this.film().id);
  }
}
