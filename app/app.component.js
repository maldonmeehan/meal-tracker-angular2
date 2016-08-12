System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var AppComponent, Meal;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.meals = [
                        new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354, 0),
                        new Meal("Fries", "I only ate half of them", 354, 0),
                    ];
                }
                AppComponent.prototype.mealWasSelected = function (clickedMeal) {
                    console.log(clickedMeal);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div class=\"container\">\n      <h1>Meal Tracker</h1>\n      <h3 *ngFor=\"#meal of meals\" (click)=\"mealWasSelected(meal)\">\n      {{ meal.name }}</h3>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            Meal = (function () {
                function Meal(name, details, calories, id) {
                    this.name = name;
                    this.details = details;
                    this.calories = calories;
                    this.id = id;
                    this.healthy = false;
                }
                return Meal;
            }());
            exports_1("Meal", Meal);
        }
    }
});
//# sourceMappingURL=app.component.js.map