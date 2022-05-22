import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { FoodTypeCarrouselModule } from './components/food-type-carrousel/food-type-carrousel.module';
import { StoreListModule } from './components/store-list/store-list.module';
import { SectionHeadingModule } from './components/section-heading/section-heading.module';
import { PromotionBannerModule } from './components/promotion-banner/promotion-banner.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FoodTypeCarrouselModule,
    StoreListModule,
    SectionHeadingModule,
    PromotionBannerModule
  ],
  declarations: [
    HomePage,
  ]
})
export class HomePageModule {}
