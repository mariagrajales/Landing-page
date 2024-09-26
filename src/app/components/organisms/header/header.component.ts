import { Component } from '@angular/core';
import { LogoComponent } from '../../atoms/logo/logo.component';
import { NavButtonsComponent } from '../../molecules/nav-buttons/nav-buttons.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [LogoComponent, NavButtonsComponent]
})
export class HeaderComponent {}
