import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Film } from '@app/models/film.model';

@Component({
  selector: 'app-film-card',
  imports: [RouterLink],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  film = input.required<Film>();
  favoriteToggled = output<number>();

  handleFavoriteToggle(event: Event): void {
    event.stopPropagation();
    this.favoriteToggled.emit(this.film().id);
  }
}
