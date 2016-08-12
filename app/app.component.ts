import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <meal-list
        [mealList]="meals"
        (onMealSelect)="mealWasSelected($event)">
        </meal-list>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354, 0),
      new Meal("Fries", "I only ate half of them", 354, 1),
      new Meal("Mac and Cheese", "Loaded with cheese", 310, 2),
      new Meal("Burgerville Meal", "Large fries with and a milkshake", 1000, 3),
      new Meal("Chipotle bowl", "Burrito bowl with chicken, fajita veggies, lettuce, tomato salsa, corn salsa, and guacamole.", 510, 4)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
  console.log('parent', clickedMeal);
  }
}
