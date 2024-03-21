import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RickAndMorty';
  url = ''
  constructor(private router: Router){
    this.url = this.router.url;
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.url = this.router.url;
        }
      }
    );
  }
}
