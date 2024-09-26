import { Component } from '@angular/core';
import { DogCardListComponent } from '../../components/organisms/dog-card-list/dog-card-list.component';

@Component({
  selector: 'app-perritos',
  templateUrl: './perritos.component.html',
  styleUrls: ['./perritos.component.css'],
  standalone: true,
  imports: [DogCardListComponent],
})
export class PerritosComponent {}
