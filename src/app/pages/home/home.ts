import { Component, computed, inject, signal } from '@angular/core';
import { FilmCard } from '@app/components/film-card/film-card';
import { FilmService } from '@app/services/film.service';
import { AutofocusDirective } from '@app/shared';

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
    const allFilms = this.filmService.films();

    if (query) {
      return allFilms.filter((film) => {
        const matchesQuery = film.title.toLowerCase().includes(query);
        return this.showFavoritesOnly() ? matchesQuery && film.isFavorite : matchesQuery;
      });
    } else if (this.showFavoritesOnly()) {
      return allFilms.filter((film) => film.isFavorite);
    }
    return allFilms;
  });

  handleSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }

  toggleFavorite(id: number): void {
    this.filmService.toggleFavorite(id);
  }

  handleFavoritesOnlyChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.showFavoritesOnly.set(input.checked);
  }
}
