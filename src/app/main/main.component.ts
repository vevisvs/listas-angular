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
    { name: "Mariela Nuñez", age: 32 },
    { name: "Monica Perez", age: 22 },
    { name: "Juan Rodriguez", age: 38 },
    { name: "Julieta Fernandez", age: 34 },
    { name: "Rodrigo Paz", age: 27 },
  ]

  showTable = false;
  changeBackground = true;

  viewTable(){
    console.log("visualizando la tabla de alumnos");
    this.showTable = true;
  }

  dropTable(){
    console.log("ocultando la tabla de alumnos");
    this.showTable = false;
  }

  changeColor(){
    this.changeBackground = !this.changeBackground;
  }
}
