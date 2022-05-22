import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionBannerComponent } from './promotion-banner.component';
import { PromotionBannerItemComponent } from './promotion-banner-item/promotion-banner-item.component';



@NgModule({
  declarations: [
    PromotionBannerComponent,
    PromotionBannerItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PromotionBannerComponent,
    PromotionBannerItemComponent
  ]
})
export class PromotionBannerModule { }
