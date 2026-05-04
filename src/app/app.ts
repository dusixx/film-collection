import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/components/footer/footer.js';
import { Header } from './shared/components/header/header.js';
import { Breadcrumbs } from './shared/components/breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, Breadcrumbs],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
