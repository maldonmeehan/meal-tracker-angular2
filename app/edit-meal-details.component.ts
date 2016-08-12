import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div id="edit" class='meal-form'>
    <h3>Edit Meal: {{meal.name}}</h3>
    <input [(ngModel)]="meal.name" class="col-sm-4 input-lg meal-form"><br>
    <input [(ngModel)]="meal.details" class="col-sm-8 input-lg meal-form"><br>
    <input [(ngModel)]="meal.calories" class="col-sm-4 input-lg meal-form"><br>
  </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
