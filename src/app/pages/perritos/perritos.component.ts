import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-perritos',
  templateUrl: './perritos.component.html',
  styleUrls: ['./perritos.component.css'],
  standalone: true,
  imports: [RouterLink]  // Agregar RouterLink aquí
})
export class PerritosComponent {}
