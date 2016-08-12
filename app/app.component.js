System.register(['angular2/core', './meal-list.component', './meal.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, meal_list_component_1, meal_model_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (meal_list_component_1_1) {
                meal_list_component_1 = meal_list_component_1_1;
            },
            function (meal_model_1_1) {
                meal_model_1 = meal_model_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.meals = [
                        new meal_model_1.Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354, 0),
                        new meal_model_1.Meal("Fries", "I only ate half of them", 354, 1),
                        new meal_model_1.Meal("Soup and Salad", "A garden salad with red onion, tomatoes, black olives and oil and vinager dressing. With tomato soup", 400, 2),
                        new meal_model_1.Meal("Burgerville Meal", "American Colossal Buerger, large fries and a Triple Berry Ice Cream Milkshake with extra whipped cream", 1500, 3),
                        new meal_model_1.Meal("Chipotle bowl", "Burrito bowl with chicken, fajita veggies, lettuce, tomato salsa, corn salsa, and guacamole.", 510, 4)
                    ];
                }
                AppComponent.prototype.mealWasSelected = function (clickedMeal) {
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [meal_list_component_1.MealListComponent],
                        template: "\n    <div id=\"header\">\n      <img src=\"./resources/images/logo2.png\" alt=\"Meal Tracker Logo\">\n      <h1>Meal Tracker</h1>\n    </div>\n\n    <div id=\"mealList\" class=\"container\">\n      <meal-list\n        [mealList]=\"meals\"\n        (onMealSelect)=\"mealWasSelected($event)\">\n        </meal-list>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map