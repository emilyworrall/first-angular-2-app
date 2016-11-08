import { Component } from '@angular/core';

@Component({
  selector: 'fa-twoway-binding',
  template: `
    <input type="text" [(ngModel)]="person.name">
    <input type="text" [(ngModel)]="person.name">
  `
})
export class TwowayBindingComponent {
  person = {
    name: 'Max',
    age: 27
  }
}
