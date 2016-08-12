import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div id="header">
      <img src="./resources/images/logo2.png" alt="Meal Tracker Logo">
      <h1>Meal Tracker</h1>
    </div>

    <div id="mealList" class="container">
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
      new Meal("Soup and Salad", "A garden salad with red onion, tomatoes, black olives and oil and vinager dressing. With tomato soup", 400, 2),
      new Meal("Burgerville Meal", "American Colossal Buerger, large fries and a Triple Berry Ice Cream Milkshake with extra whipped cream", 1500, 3),
      new Meal("Chipotle bowl", "Burrito bowl with chicken, fajita veggies, lettuce, tomato salsa, corn salsa, and guacamole.", 510, 4)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
  }
}
