import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '@app/shared/components/button/button';

@Component({
  selector: 'app-about',
  imports: [Button],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  router = inject(Router);
  location = inject(Location);

  goBack() {
    this.location.back();
  }
}
