import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodTypeCarrouselComponent } from './food-type-carrousel.component';
import { FoodTypeCarrouselItemComponent } from './food-type-carrousel-item/food-type-carrousel-item.component';



@NgModule({
  declarations: [
    FoodTypeCarrouselComponent,
    FoodTypeCarrouselItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FoodTypeCarrouselComponent,
    FoodTypeCarrouselItemComponent
  ]
})
export class FoodTypeCarrouselModule { }
