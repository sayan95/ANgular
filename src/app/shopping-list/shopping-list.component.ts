import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingrident.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  private ingridients: Ingridient[] =[
    new Ingridient('Apple',5),
    new Ingridient('Tomatoes',10),
  ];

  //getters 
  public getIngridients(){
    return this.ingridients;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
