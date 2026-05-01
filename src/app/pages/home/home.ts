import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FilmCard } from '@app/components/film-card/film-card';
import { FilmService } from '@app/services/film.service';
import { AutofocusDirective } from '@app/shared/directives/autofocus.directive';

@Component({
  selector: 'app-home',
  imports: [FilmCard, AutofocusDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private filmService = inject(FilmService);
  private router = inject(Router);

  public searchQuery = signal<string>('');

  public filteredFilms = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const allFilms = this.filmService.films();

    return query
      ? allFilms.filter((film) => {
          return film.title.toLowerCase().includes(query);
        })
      : allFilms;
  });

  handleInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }

  toggleFavorite(id: number): void {
    this.filmService.toggleFavorite(id);
  }

  showDetails(id: number): void {
    this.router.navigate(['/films', id]);
  }
}
