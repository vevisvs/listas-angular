import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="ctn-header">
      <h1>
        {{title}}
      </h1>
      <span>{{fecha | date:'fullDate'}}</span>
    </div>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = "Listas en Angular"
  fecha: Date = new Date();
}
