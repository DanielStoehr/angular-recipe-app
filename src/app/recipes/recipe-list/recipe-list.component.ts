import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private rs: RecipeService) {}

  ngOnInit(): void {
    this.rs.recipesChanged.subscribe((recipes) => {
      this.recipes = recipes;
    });
    this.recipes = this.rs.getRecipes();
  }
}
