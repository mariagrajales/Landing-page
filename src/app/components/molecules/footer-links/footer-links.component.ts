import { Component } from '@angular/core';
import { FooterLinkComponent } from '../../atoms/footer-link/footer-link.component';

@Component({
  selector: 'app-footer-links',
  templateUrl: './footer-links.component.html',
  styleUrls: ['./footer-links.component.css'],
  standalone: true,
  imports: [FooterLinkComponent],
})
export class FooterLinksComponent {}
