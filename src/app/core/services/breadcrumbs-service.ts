import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Breadcrumb } from '../models/breadcrumb.model';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  private _breadcrumbs = signal<Breadcrumb[]>([]);
  breadcrumbs = this._breadcrumbs.asReadonly();

  constructor() {
    const routerSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.buildBreadcrumbs();
      }
    });
    this.destroyRef.onDestroy(() => routerSub.unsubscribe());
    this.buildBreadcrumbs();
  }

  private buildBreadcrumbs() {
    const crumbs: Breadcrumb[] = [];
    let currentRoute = this.route.root;
    const addedLabels = new Set<string>();

    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;

      const label: string = currentRoute.snapshot.data['label'];
      if (!label || addedLabels.has(label)) {
        continue;
      }
      addedLabels.add(label);
      const urlSegments = currentRoute.snapshot.url;
      const url = `/${urlSegments.map(({ path }) => path).join('/')}`;

      crumbs.push({ url, label });
    }
    this._breadcrumbs.set(crumbs);
  }
}
