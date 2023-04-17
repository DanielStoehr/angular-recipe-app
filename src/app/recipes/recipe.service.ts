import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()
  
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'this is simply a test',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'
    ),
    new Recipe(
      'Another Test Recipe',
      'this is simply a test',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'
    ),
  ];

  getRecipes(){
    return this.recipes.slice()
  }
}
