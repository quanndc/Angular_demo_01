import { Component, Input } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import { Item } from 'src/app/models/item.model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input()
  listItems: Item[] = [];

  constructor(){
      this.myForm.addControl('name', this.name);
      this.myForm.addControl('price', this.price);
      this.myForm.addControl('quantity', this.quantity);
      this.myForm.addControl('description', this.description);
  }
  myForm: FormGroup = new FormGroup({});
  name: FormControl = new FormControl('');
  price: FormControl = new FormControl('');
  quantity: FormControl = new FormControl('');
  description: FormControl = new FormControl('');

  submit() {
    let newItem: Item = {
      name: this.name.value,
      price: this.price.value,
      quantity: this.quantity.value,
      description: this.description.value
    }
    this.listItems.push(newItem);
    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
