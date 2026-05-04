import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouteData } from '@app/shared/constants';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  homePath = `/${RouteData.Home.path}`;
  homeLabel = RouteData.Home.label;
  aboutPath = `/${RouteData.About.path}`;
  aboutLabel = RouteData.About.label;
}
