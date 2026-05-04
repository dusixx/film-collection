import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FilmService } from '@app/core';
import {
  DurationPipe,
  FavoriteToggle,
  FormatThousandsPipe,
  HOME_BTN_TEXT,
  rndInt,
} from '@app/shared';
import { Button } from '@app/shared/components/button/button';

@Component({
  standalone: true,
  imports: [RouterLink, DurationPipe, FormatThousandsPipe, FavoriteToggle, Button],
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
  homeBtnText = HOME_BTN_TEXT;

  toggleFavorite() {
    this.service.toggleFavorite(this.film()!.id);
  }
}
