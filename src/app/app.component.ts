import { Component } from '@angular/core';
import { Item } from './models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular_demo_01';

  constructor() {}

  listItems: Item[] = [
    {
      name: 'Item 1',
      price: 100,
      quantity: 1,
      description: 'Description 1',
    },
    {
      name: 'Item 2',
      price: 100,
      quantity: 1,
      description: 'Description 1',
    },
    {
      name: 'Item 3',
      price: 100,
      quantity: 1,
      description: 'Description 1',
    },
    {
      name: 'Item 4',
      price: 100,
      quantity: 1,
      description: 'Description 1',
    },
    {
      name: 'Item 5',
      price: 100,
      quantity: 1,
      description: 'Description 1',

    },
  ];


  cart:Item[] = [];

  addToCart(item:Item){
    this.cart.push(item);
    console.log(this.cart);
  }

}
