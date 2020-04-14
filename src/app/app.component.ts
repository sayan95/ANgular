import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private loadFeature:string;

  constructor(){
    this.loadFeature='recipe'
  }

  //getters
  public getLoadedFeature():string{
    return this.loadFeature;
  }

  //methods
  public onNavigate(feature: string):void{
    this.loadFeature=feature;
  }
}
