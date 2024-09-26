import { Component } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
  selector: 'app-nav-buttons',
  templateUrl: './nav-buttons.component.html',
  styleUrls: ['./nav-buttons.component.css'],
  standalone: true,
  imports: [ButtonComponent]
})
export class NavButtonsComponent {}
