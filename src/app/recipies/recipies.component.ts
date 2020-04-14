import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {

  private selectedRecipe:Recipe;
  constructor() {
    //this.selectedRecipe = new Recipe('','','');
  }

  ngOnInit(): void {
    
  }

  public getRecipeDetails():Recipe{
      return this.selectedRecipe;
  }
  public setRecipeDetails(recipe:Recipe):void{
    this.selectedRecipe = recipe;
  }

}
