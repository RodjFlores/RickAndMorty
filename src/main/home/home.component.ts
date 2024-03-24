import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(public router: Router) {}

  /**
   * Navigates to a specific route.
   * @param path Route to be directed to.
   */
  public navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
