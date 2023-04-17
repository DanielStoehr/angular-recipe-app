import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    const found = this.ingredients.find((i) => i.name === ingredient.name);
    if (found) {
      this.ingredients = this.ingredients.map((i) => {
        if (i.name === ingredient.name)
          return { ...i, amount: i.amount + ingredient.amount };
        return i;
      });
    } else {
      this.ingredients.push(ingredient);
    }
    this.ingredientsChanged.emit(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]) {
    ingredients.map((ingredient) => {
      this.addIngredient(ingredient);
    });
    // this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.getIngredients());
  }
}
