import { Component } from '@angular/core';
import { HeaderComponent } from './components/organisms/header/header.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet]
})
export class AppComponent {}
