import { Component, computed, inject, signal } from '@angular/core';
import { FilmService } from '@app/core';
import { AutofocusDirective, FilmCard } from '@app/shared';

@Component({
  selector: 'app-home',
  imports: [FilmCard, AutofocusDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private filmService = inject(FilmService);

  showFavoritesOnly = signal<boolean>(false);
  searchQuery = signal<string>('');

  public filteredFilms = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();

    const allFilms = this.showFavoritesOnly()
      ? this.filmService.favorites()
      : this.filmService.films();

    if (query) {
      return allFilms.filter((film) => {
        return film.title.toLowerCase().includes(query);
      });
    }
    return allFilms;
  });

  onQueryInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }

  onFavoritesOnlyChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.showFavoritesOnly.set(input.checked);
  }

  toggleFavorite(id: number): void {
    this.filmService.toggleFavorite(id);
  }
}
