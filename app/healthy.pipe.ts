import {Pipe, PipeTransform} from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "healthy",
  pure: false
})

export class HealthyPipe implements PipeTransform {
  transform(mealList: Meal[], args) {
    var userDropDownSelection = args[0];
    if (userDropDownSelection === 'healthy'){
      return mealList.filter((meal) =>{
        return meal.calories <= 500;
      });
    } else if (userDropDownSelection === 'notHealthy'){
        return mealList.filter((meal) =>{
          return meal.calories > 500;
      });
    } else {
      return mealList;
    }
  }
}
