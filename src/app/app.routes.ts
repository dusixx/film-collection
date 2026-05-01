import { Routes } from '@angular/router';
import { About, FilmDetails, Home } from '@pages';

export const routes: Routes = [
  { path: '', redirectTo: 'films', pathMatch: 'full' },
  { path: 'films', component: Home },
  { path: 'about', component: About },
  { path: 'films/:id', component: FilmDetails },
  { path: '**', redirectTo: '' },
];
