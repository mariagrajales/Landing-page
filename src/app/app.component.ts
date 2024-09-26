import { Component } from '@angular/core';
import { HeaderComponent } from './components/organisms/header/header.component';
<<<<<<< HEAD
=======
import { FooterComponent } from './components/organisms/footer/footer.component';
>>>>>>> d544c7cc5103d2628e8fa7950404ca0238aeba1a
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
<<<<<<< HEAD
  `,
  standalone: true,
  imports: [HeaderComponent, RouterOutlet]
=======
    <app-footer></app-footer>
  `,
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet]
>>>>>>> d544c7cc5103d2628e8fa7950404ca0238aeba1a
})
export class AppComponent {}
