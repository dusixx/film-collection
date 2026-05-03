import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FilmService } from '@app/services/film.service';
import { DurationPipe, FormatThousandsPipe, rndInt } from '@app/shared';

@Component({
  standalone: true,
  imports: [RouterLink, DurationPipe, FormatThousandsPipe],
  templateUrl: './film-details.html',
  styleUrl: './film-details.scss',
})
export class FilmDetails {
  private route = inject(ActivatedRoute);
  private service = inject(FilmService);

  rawId = this.route.snapshot.paramMap.get('id');
  id = Number(this.rawId);
  film = computed(() => this.service.getFilmById(this.id));
  votes = rndInt(50_000, 500_000);

  handleToggleFavorite() {
    this.service.toggleFavorite(this.film()!.id);
  }
}
