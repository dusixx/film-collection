import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-favorite-toggle',
  imports: [],
  templateUrl: './favorite-toggle.html',
  styleUrl: './favorite-toggle.scss',
})
export class FavoriteToggle {
  isFavorite = input<boolean>(false);
  favoriteToggled = output<void>();

  onClick(event: Event): void {
    event.stopPropagation();
    this.favoriteToggled.emit();
  }
}
