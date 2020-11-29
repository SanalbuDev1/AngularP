import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = "platzi";
  
  items = ["nicolas","julian","Santiago"];

  power:number = 10;  

  addItem(){
    this.items.push(this.title);
  }

  deleteItem(index:number){
    this.items.splice(index,1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
