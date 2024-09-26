import { Component, Input } from '@angular/core';
import { DogImageComponent } from '../../atoms/dog-image/dog-image.component';
import { AdoptionButtonComponent } from '../../atoms/adoption-button/adoption-button.component';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.css'],
  standalone: true,
  imports: [DogImageComponent, AdoptionButtonComponent],
})
export class DogCardComponent {
  @Input() name: string = 'Nombre';
  @Input() age: string = 'Edad';
  @Input() imageUrl: string = '';
}
