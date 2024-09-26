import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { DogCardComponent } from '../../molecules/dog-card/dog-card.component';
import { DOGS } from '../../../data/dog-data'; // Importar los datos de los perritos

@Component({
  selector: 'app-dog-card-list',
  templateUrl: './dog-card-list.component.html',
  styleUrls: ['./dog-card-list.component.css'],
  standalone: true,
  imports: [CommonModule, DogCardComponent], // Agregar CommonModule al arreglo de imports
})
export class DogCardListComponent {
  dogs = DOGS; // Asignar los datos importados a la propiedad 'dogs'
}
