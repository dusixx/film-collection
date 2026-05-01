import { Component, input, output } from '@angular/core';
import { Film } from '@app/models/film.model';

@Component({
  selector: 'app-film-card',
  imports: [],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  film = input.required<Film>();
  cardClicked = output<number>();
  favoriteToggled = output<number>();

  handleClick(): void {
    this.cardClicked.emit(this.film().id);
  }

  handleFavoriteToggle(event: Event): void {
    event.stopPropagation();
    this.favoriteToggled.emit(this.film().id);
  }
}
