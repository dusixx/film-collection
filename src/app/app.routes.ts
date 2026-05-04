import { Routes } from '@angular/router';
import { filmTitleResolver } from '@app/core';
import { RouteData } from '@app/shared';

export const routes: Routes = [
  {
    path: '',
    redirectTo: RouteData.Home.path,
    pathMatch: 'full',
  },
  {
    path: RouteData.Home.path,
    data: { label: RouteData.Home.label },
    children: [
      {
        path: '',
        loadComponent: () => import('@features/home/home').then((m) => m.Home),
        data: { label: RouteData.Home.label },
      },
      {
        path: ':id',
        loadComponent: () =>
          import('@features/film-details/film-details').then((m) => m.FilmDetails),
        resolve: { label: filmTitleResolver },
      },
    ],
  },
  {
    path: RouteData.About.path,
    loadComponent: () => import('@features/about/about').then((m) => m.About),
    data: { label: RouteData.About.label },
  },
  {
    path: '**',
    loadComponent: () => import('@features/not-found/not-found').then((m) => m.NotFound),
  },
];
