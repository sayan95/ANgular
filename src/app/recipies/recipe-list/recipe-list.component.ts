import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  private recipe : Recipe[] =[
    new Recipe('Recipe1','This is a test recipe','https://cookieandkate.com/images/2020/03/vegan-chana-masala-recipe-2.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
