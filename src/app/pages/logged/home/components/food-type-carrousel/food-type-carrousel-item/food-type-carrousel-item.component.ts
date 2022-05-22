import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-type-carrousel-item',
  templateUrl: './food-type-carrousel-item.component.html',
  styleUrls: ['./food-type-carrousel-item.component.scss'],
})
export class FoodTypeCarrouselItemComponent implements OnInit {

  @Input('name') name: string = '';
  @Input('imageFileName') imageFileName: string = '';

  constructor() { }

  ngOnInit() {}

}
