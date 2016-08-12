import { Component } from 'angular2/core';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  template: `
  <h3 *ngFor="#currentMeal of mealList" (click)="mealClicked(currentMeal)">
    {{ currentMeal.name }}
  </h3>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  mealClicked(clickedMeal: Meal): void {
    console.log(clickedMeal);
  }
}

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <meal-list [mealList]="meals"></meal-list>
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
  mealWasSelected(clickedMeal: Meal): void {
  console.log(clickedMeal);
  }
}

export class Meal {
  public healthy: boolean = false;
  constructor(public name: string, public details: string, public calories: number, public id: number) {
  }
}
