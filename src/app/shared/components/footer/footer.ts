import { Component } from '@angular/core';
import { AuthorInfo } from '@app/shared/constants';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  authorUsername = AuthorInfo.GithubUsername;
  authorGithubUrl = AuthorInfo.GithubRepoUrl;
}
