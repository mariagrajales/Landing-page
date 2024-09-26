import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-link',
  templateUrl: './footer-link.component.html',
  styleUrls: ['./footer-link.component.css'],
  standalone: true,
})
export class FooterLinkComponent {
  @Input() link!: string;
  @Input() label!: string;
}
