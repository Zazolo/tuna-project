import { Component, Input, OnInit } from '@angular/core';
import { IPromotion } from '../interfaces/ipromotion';

@Component({
  selector: 'app-promotion-banner-item',
  templateUrl: './promotion-banner-item.component.html',
  styleUrls: ['./promotion-banner-item.component.scss'],
})
export class PromotionBannerItemComponent implements OnInit {

  @Input('promotion') promotion: IPromotion = undefined;

  constructor() { }

  ngOnInit() {}

}
