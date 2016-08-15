import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <div class="row" id="each-meal">
    <div class="col-sm-12">
      <h3>{{ meal.name }}</h3>
      <ul>
        <li>Details: {{ meal.details}}</li>
        <li>Calories: {{ meal.calories }}</li>
      </ul>
    </div>
  </div>
  `
})
export class MealComponent {
  public meal: Meal;
}
