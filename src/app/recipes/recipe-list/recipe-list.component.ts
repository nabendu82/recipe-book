import { Component,  OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeThatSelected = new EventEmitter();
  recipes: Recipe[] = [
    new Recipe('Chicken Biryani', 'This is simply biryani', 'https://geekrobocook.com/wp-content/uploads/2021/05/Muradabadi-chicken-biryani-1200x900.jpg'),
    new Recipe('Chicken noodles', 'This is simply noodles', 'https://www.licious.in/blog/wp-content/uploads/2020/12/Sesame-Chicken-Noodles.jpg')
  ];

  constructor() { }
  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe){
    this.recipeThatSelected.emit(recipe);
  }

}
