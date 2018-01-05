import { Component } from '@angular/core';
import { SocialShareService } from '@betadigitalproduction/ngx-social-share-service';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public share: SocialShareService) {
  }
}
