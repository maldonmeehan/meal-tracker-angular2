import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <h3 *ngFor="#meal of meals">{{ meal.name }}</h3>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354, 0),
      new Meal("Fries", "I only ate half of them", 354, 0),
    ];
  }
}

export class Meal {
  public healthy: boolean = false;
  constructor(public name: string, public details: string, public calories: number, public id: number) {
  }
}
