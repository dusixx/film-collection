import { Routes } from '@angular/router';
import { filmTitleResolver } from './core/resolvers/film-resolver';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'films',
    pathMatch: 'full',
  },
  {
    path: 'films',
    data: { label: 'Home' },
    children: [
      {
        path: '',
        loadComponent: () => import('@features/home/home').then((m) => m.Home),
        data: { label: 'Home' },
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
    path: 'about',
    loadComponent: () => import('@features/about/about').then((m) => m.About),
    data: { label: 'About' },
  },
  {
    path: '**',
    loadComponent: () => import('@features/not-found/not-found').then((m) => m.NotFound),
  },
];
