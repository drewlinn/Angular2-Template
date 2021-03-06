import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <div class="container">
      <h1>Angular 2 App for {{month}}/{{day}}/{{year}}</h1>
      <h3>{{currentFocus}}</h3>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
}
