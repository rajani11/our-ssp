import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'self-service-portal';

  noHeader: any = true;

  constructor(private router: Router) {
    // hide header on login page
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.indexOf('/home') !== -1 || (event.urlAfterRedirects && event.urlAfterRedirects.indexOf('/home') !== -1)) {
          this.noHeader = true;
        } else {
          this.noHeader = false;
        }
      }
    });
  }
}
