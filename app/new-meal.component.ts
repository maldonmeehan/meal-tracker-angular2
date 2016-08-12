import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Add Meal:</h3>
    <input placeholder="meal" class="col-sm-8 input-lg" #newMealName>
    <input placeholder="details" class="col-sm-8 input-lg" #newMealDetails>
    <input placeholder="calories" class="col-sm-8 input-lg" #newMealCalories>
    <button (click)="addMeal(newMealName, newMealDetails, newMealCalories)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(newMealNameInput: HTMLInputElement, newMealDetailsInput: HTMLInputElement, newMealCaloriesInput: HTMLInputElement){
  var newMeal = new Meal(newMealNameInput.value, newMealDetailsInput.value, parseInt(newMealCaloriesInput.value), 0);
  this.onSubmitNewMeal.emit(newMeal);
  newMealNameInput.value = "";
  newMealDetailsInput.value = "";
  newMealCaloriesInput.value = "";
  }
}
