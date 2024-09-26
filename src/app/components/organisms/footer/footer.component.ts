import { Component } from '@angular/core';
import { FooterLinksComponent } from '../../molecules/footer-links/footer-links.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports: [FooterLinksComponent],
})
export class FooterComponent {}
