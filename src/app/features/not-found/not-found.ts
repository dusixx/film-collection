import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HOME_BTN_TEXT } from '@app/shared';
import { Button } from '@app/shared/components/button/button';

@Component({
  selector: 'app-not-found',
  imports: [Button],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {
  router = inject(Router);
  homeBtnText = HOME_BTN_TEXT;
}
