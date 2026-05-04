import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbsService } from '@app/core';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.scss',
})
export class Breadcrumbs {
  breadcrumbsService = inject(BreadcrumbsService);
}
