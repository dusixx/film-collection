import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  author = 'dusixx';
  githubUrl = 'https://github.com/dusixx?tab=repositories';
}
