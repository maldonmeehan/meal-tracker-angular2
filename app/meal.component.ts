import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <h3>{{ meal.name }}</h3>
    <p>Details: {{ meal.details}}</p>
    <p>Calories: {{ meal.calories }}</p>
  `
})
export class MealComponent {
  public meal: Meal;
}
