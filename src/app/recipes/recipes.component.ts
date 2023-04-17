import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent {
  seletedRecipe: Recipe;

  constructor(private rs:RecipeService){}

  ngOnInit(){
    this.rs.recipeSelected.subscribe(recipe => {
      this.seletedRecipe = recipe
    })
  }
}
