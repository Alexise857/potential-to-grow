import {Component, OnInit} from '@angular/core';
import {Ingridents} from '../shared/ingridents.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingridents[] = [
    new Ingridents('Apple', 5),
    new Ingridents('Tomatos', 10)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
