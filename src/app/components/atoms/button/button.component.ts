import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() link!: string;
}
