import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  item!: Item

  // @Output()
  // newItem = new EventEmitter<Item>();

  // add(item: Item){
  //   this.newItem.emit(item);
  // }
}
