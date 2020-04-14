import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  private recipes : Recipe[] =[
      new Recipe('Recipe 1','This is a test recipe','https://cookieandkate.com/images/2020/03/vegan-chana-masala-recipe-2.jpg'),
      new Recipe('Recipe 2','This is a test recipe','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'),
      new Recipe('Recipe 3','This is a test recipe','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg'),
  ];
    
  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  //getters 
  public getRecipes():Recipe [] {
    return this.recipes;
  }
  constructor() { }

  ngOnInit(): void {
  }

  //methods
  public onRecipeSelected(recipe:Recipe):void{

    this.recipeWasSelected.emit(recipe);
  }

}
