import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



const products =  [
  {id: 1, name : 'product 1', price : 100 }, 
  {id: 2, name : 'product 2', price : 200 }, 
  {id: 3, name : 'product 3', price : 300 }, 
  {id: 4, name : 'product 4', price : 400 }, 
  {id: 5, name : 'product 5', price : 500 }, 
  {id: 6, name : 'product 6', price : 600 }, 
  {id: 7, name : 'product 7', price : 700 }, 
  {id: 8, name : 'product 8', price : 800 },
  {id: 9, name : 'product 9', price : 900 },
  {id: 10, name : 'product 10', price : 1000 }
];

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})
export class MyTableComponent implements OnInit {
  
  public productList = products;  

  @Input() public rows: number;

  @Output() public deleteProduct: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    console.log(this.rows);
  }
  
  public deleteRow(id: number) {
    this.deleteProduct.emit(id);
    this.productList = this.productList.filter((p) => p.id !== id);

  }
  public getList(): any {
    return this.productList.filter((item, index) => this.rows > index);
  }
}
