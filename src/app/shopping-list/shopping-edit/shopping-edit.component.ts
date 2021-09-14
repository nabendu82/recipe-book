import { Component, ElementRef,  OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() {}

  ngOnInit(): void {}

  onAddItem(){
    const ingreName = this.nameInputRef.nativeElement.value;
    const ingreAmt = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingreName, ingreAmt);
    this.ingredientAdded.emit(newIngredient);
  }

}
