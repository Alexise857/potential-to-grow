import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('a test recipe','this is a simple test','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bean-recipes-1.jpg'),
    new Recipe('a test recipe','this is a simple test','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bean-recipes-1.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
