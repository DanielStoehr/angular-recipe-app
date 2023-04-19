import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private sls: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.sls.getIngredients();
    this.subscription = this.sls.ingredientsChanged.subscribe((ingredients) => {
      this.ingredients = ingredients;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
