import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dog-image',
  templateUrl: './dog-image.component.html',
  styleUrls: ['./dog-image.component.css'],
  standalone: true,
})
export class DogImageComponent {
  @Input() imageUrl: string = '';

  onImageLoad() {
    console.log(`Image loaded successfully: ${this.imageUrl}`);
  }

  onImageError() {
    console.log(`Error loading image: ${this.imageUrl}`);
  }
}
