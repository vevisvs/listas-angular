import { Component } from '@angular/core';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  listOfStudents: Alumno[] = [
    { name: "Angela Spelorzi", age: 35 },
    { name: "Gonzalo Ferreira", age: 25 },
    { name: "Patricia Diaz", age: 28 },
    { name: "Jonatan Valdez", age: 30 },
    { name: "Mariela Nuñez", age: 32 }
  ]
}
