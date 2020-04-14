import { Component, OnInit ,EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected= new EventEmitter<string>();
  constructor() { 
    //
  }

  ngOnInit(): void {
  }

  //getters 

  //methods
  public onSelect(feature:string):void{
    this.featureSelected.emit(feature);
  }

}
